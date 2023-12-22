// import React from "react";
// import "./Order.css";
// import moment from "moment";
// import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
// import numeral from "numeral"; // Import numeral

// function Order({ order }) {
//     return (
//         <div className="order">
//             <h2>Order</h2>
//             <p>
//                 {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
//             </p>
//             <p className="order__id">
//                 <small>{order.id}</small>
//             </p>
//             {order.data.basket?.map((item) => (
//                 <CheckoutProduct
//                     key={item.id}
//                     id={item.id}
//                     title={item.title}
//                     image={item.image}
//                     price={item.price}
//                     rating={item.rating}
//                     hideButton
//                 />
//             ))}
//             <CurrencyFormat
//                 renderText={(value) => (
//                     <h3 className="order__total">Order Total: {value}</h3>
//                 )}
//                 decimalScale={2}
//                 value={order.data.amount / 100}
//                 displayType={"text"}
//                 thousandSeparator={true}
//                 prefix={"$"}
//             />
//         </div>
//     );
// }

// export default Order;

import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import numeral from "numeral"; // 1. Import numeral
import "numeral/locales"; // Optional: Import if you want to use specific locales

function Order({ order }) {
    const formattedTotal = numeral(order.data.amount / 100).format("$0,0.00"); // 2. Formatting with numeral

    return (
        <div className="order">
            <h2>Order</h2>
            <p>
                {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
            </p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map((item) => (
                <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <h3 className="order__total">Order Total: {formattedTotal}</h3>{" "}
            {/* Display formatted total */}
        </div>
    );
}

export default Order;
