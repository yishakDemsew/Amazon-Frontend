import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";

function Product(props) {
    let { id, title, image, price, rating } = props;
    const [, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch or to send off  the item into the data layer
        // In the context of a state management pattern like Redux, dispatch is typically a function that allows you to send actions to the reducer for state updates.
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}
                    {/* <p>⭐</p> */}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;
