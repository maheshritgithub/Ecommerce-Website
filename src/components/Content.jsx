import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Content(props) {
    function fetch() {
        props.Additem(props.id);
    }

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
                    <button className="Buttontextalign" onClick={fetch}>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}

export default Content;
