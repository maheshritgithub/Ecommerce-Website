import React, { useState } from "react";
import Content from "./Content";
import egagets from "./dictionary/egagets";
import addtocart from "./dictionary/addtocart";



function Middlecontent() {
    let value;

    function Additem(id) {
        console.log(id);

        value = egagets[id]
        console.log(value)
        addtocart.push(value);

    }




    return (
        <div>


            <div className="Content-Container" id="blockcon">
                {egagets.map((product, index) => (
                    <Content
                        id={index}
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        Additem={Additem}
                    />
                ))}
            </div>
        </div>
    );
}

export default Middlecontent;
