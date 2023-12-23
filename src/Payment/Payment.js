import React, { useEffect, useState } from "react";
import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import numeral from "numeral"; // Import numeral

import axios from "../axios";
import { db } from "../firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    // const history = useHistory();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const getBasketTotal = (basket) =>
        basket?.reduce((amount, item) => item.price + amount, 0); //iterates through the basket, tallies the total and returns it as value

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // generates stripe secret
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // stripe expects total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
            console.log("Client Secret:", response.data.clientSecret); // Log the clientSecret
        };

        getClientSecret();
    }, [basket]);

    // console.log("the secrete is : ", clientSecret);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setProcessing(true);

    //     await stripe
    //         .confirmCardPayment(clientSecret, {
    //             payment_method: {
    //                 card: elements.getElement(CardElement),
    //             },
    //         })
    //         .then(({ paymentIntent }) => {
    //             // payment confirmation

    //             db.collection("users")
    //                 .doc(user?.uid)
    //                 .collection("orders")
    //                 .doc(paymentIntent.id)
    //                 .set({
    //                     basket: basket,
    //                     amount: paymentIntent.amount,
    //                     created: paymentIntent.created,
    //                 });

    //             setSucceeded(true);
    //             setError(null);
    //             setProcessing(false);

    //             dispatch({
    //                 type: "EMPTY_BASKET",
    //             });

    //             // history.replace("/orders");
    //             navigate("/orders");
    //         });
    // };

    // with try/catch
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        console.log(
            "Attempting to confirm payment with clientSecret:",
            clientSecret
        );

        try {
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (result.error) {
                // Handle error
                setError(`Payment failed: ${result.error.message}`);
                setProcessing(false);
                return;
            }

            // Payment was successful
            const paymentIntent = result.paymentIntent;

            db.collection("users")
                .doc(user?.uid)
                .collection("orders")
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET",
            });

            navigate("/orders");
        } catch (error) {
            console.error("Error processing payment:", error);
            setError(
                "There was an error processing your payment. Please try again."
            );
            setProcessing(false);
        }
    };

    const handleChange = (e) => {
        // listen for changes and display any errors as the customer types
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Detroit, MI 48222</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and deliver</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe card functionality */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            {/* <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button
                                    disabled={
                                        processing || disabled || succeeded
                                    }
                                >
                                    <span>
                                        {processing ? (
                                            <p>Processing</p>
                                        ) : (
                                            "Buy Now"
                                        )}
                                    </span>
                                </button>
                            </div> */}

                            {/* using numeral  */}
                            <div className="payment__priceContainer">
                                <h3>
                                    Order Total:{" "}
                                    {numeral(getBasketTotal(basket)).format(
                                        "$0,0.00"
                                    )}
                                </h3>
                                <button
                                    disabled={
                                        processing || disabled || succeeded
                                    }
                                >
                                    <span>
                                        {processing ? (
                                            <p>Processing</p>
                                        ) : (
                                            "Buy Now"
                                        )}
                                    </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
