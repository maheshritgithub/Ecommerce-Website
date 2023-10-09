
import React from "react";
import Cart from "./Cart"; // Changed the component name to Cart
import addtocart from "./dictionary/addtocart";

function CartMap() {
    return (
        <div>
            <h1>CART</h1>
            <div className="Content-Container1">
                {addtocart.map((product, index) => (
                    <Cart
                        id={index}
                        key={index}
                        name={product.name}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default CartMap;
