import React from "react";
import "./Homepage.css";
import Product from "../Product/Product";

function Homepage() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__image__container">
                    <img
                        className="home__image"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/NWIxMGIwNWIt/NWIxMGIwNWIt-NjE4MWNhNDQt-w3000._CB417433465_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="7229344220"
                        title="Travel Backpack, Carry On Luggage, Personal Item Bag for Airlines, Lightweight Hiking Backpack "
                        price={39.99}
                        image="https://m.media-amazon.com/images/I/71QDB8tIRoL._AC_SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id="494548094"
                        title="JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language 7th Edition"
                        price={45.46}
                        rating={6}
                        image="https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="494548095"
                        title="Adidas Real Madrid Women's Home Jersey 23/24 - 100% Polyester  "
                        price={99.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51nTrI1uzuL._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="159756362"
                        title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
                        price={1399.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="495380114"
                        title="Logitech for Creators Blue Yeti USB Microphone for Gaming, Streaming, Podcasting,..."
                        price={84.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61egnO8q6ZL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg"
                    />
                    <Product
                        id="490385330"
                        title="Samsung Galaxy Watch 3 (41mm, GPS, Bluetooth) Smart Watch"
                        price={399.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81Iu41zFPwL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                </div>

                <div className="home__row forMobile">
                    <Product
                        id="494548095"
                        title="Adidas Real Madrid Women's Home Jersey 23/24 - 100% Polyester  "
                        price={99.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51nTrI1uzuL._AC_SX385_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
