// import React from "react";
// import "./Subtotal.css";
// import numeral from "numeral"; // Import numeral

// import { useStateValue } from "../StateProvider/StateProvider";
// import { useNavigate } from "react-router-dom";

// function Subtotal() {
//     let [{ basket }, dispatch] = useStateValue();
//     // const history = useHistory();
//     const navigate = useNavigate();
//     const getBasketTotal = (basket) =>
//         basket?.reduce((amount, item) => item.price + amount, 0);
//iterates through the basket, tallies the total and returns it as value

//     return (
//         <div className="subtotal">
//             <CurrencyFormat
//                 renderText={(value) => (
//                     <>
//                         <p>
//                             Subtotal ({basket.length} items):{" "}
//                             <strong>{value}</strong>
//                         </p>
//                         <small className="subtotal__gift">
//                             <input type="checkbox" /> This order contains a gift
//                         </small>
//                     </>
//                 )}
//                 decimalScale={2}
//                 value={getBasketTotal(basket)}
//                 displayType={"text"}
//                 thousandSeparator={true}
//                 prefix={"$"}
//             />

//             <button onClick={(e) => navigate("/payment")}>
//                 Proceed to Checkout
//             </button>
//         </div>
//     );
// }

// export default Subtotal;

import React from "react";
import "./Subtotal.css";
import numeral from "numeral"; // Import numeral package

import { useStateValue } from "../StateProvider/StateProvider";
import { useNavigate } from "react-router-dom";

function Subtotal() {
    let [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const getBasketTotal = (basket) =>
        basket?.reduce((amount, item) => item.price + amount, 0);

    // Modify the value format using numeral
    const formattedTotal = numeral(getBasketTotal(basket)).format("$0,0.00");

    return (
        <div className="subtotal">
            {/* Replace CurrencyFormat with numeral formatted value */}
            <p>
                Subtotal ({basket.length} items):{" "}
                <strong>{formattedTotal}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>

            <button onClick={(e) => navigate("/payment")}>
                Proceed to Checkout
            </button>
        </div>
    );
}

export default Subtotal;
