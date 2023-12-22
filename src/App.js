import "./App.css";
import Checkout from "./Checkout/Checkout";
import Header from "./Header/Header";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders/Orders";
let promise = loadStripe(
    "pk_test_51OJFxZLTo8uXWRuhfenyQgjMnP9LFtU3rL7TOuDmlLbtcfyjvyQhwtC4c48MSj8eCyVTtJCWPcujy0piEkwAKN2g00Nyh6k0OF"
);

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when the app component loads...
        auth.onAuthStateChanged((authUser) => {
            // console.log("THE USER IS >>> ", authUser);
            if (authUser) {
                // the user just logged in / the user was logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // the user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/checkout"
                    element={
                        <>
                            <Header />
                            <Checkout />
                        </>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/orders"
                    element={
                        <>
                            <Header />
                            <Orders />
                        </>
                    }
                />
                <Route
                    path="/payment"
                    element={
                        <>
                            <Header />
                            <Elements stripe={promise}>
                                <Payment />
                            </Elements>
                        </>
                    }
                />
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Homepage />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
