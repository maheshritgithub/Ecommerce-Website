
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart(props) {
    return (
        <div className="card" style={{ width: "18rem", position: "relative" }}>
            <div style={{ overflow: "hidden" }}>
                <img src={props.image} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <p>{props.price}</p>
                <div className="addCartButton">
                    <button className="Buttontextalign">DELETE</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
