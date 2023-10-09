
import React, { useState } from "react";
import headerImage from "../images/headerimage.jpg";
const buttonStyle = {
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingTop: "5px",
    paddingBottom: "5px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "10px"
};

const headerStyles = {
    backgroundImage: `url(${headerImage})`,
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    paddingTop: "80px",
    paddingLeft: "100px",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Georgia, Arial, and Helvetica",
    width: "auto",
    position: "relative"
};

function Header(props) {
    const [value, setValue] = useState(false);

    function toggleBoolean() {
        setValue(!value); // Toggle the value between true and false
        sendValue(!value); // Send the updated value to the parent component
    }

    function sendValue(value) {
        props.getvalue(value);
    }

    return (
        <div style={headerStyles} className="mainDiv">
            <h1 style={{ color: "ffff" }}>Welcome to Our Website</h1>
            <p style={{ color: "green" }}>Discover Amazing Products</p>
            <button style={buttonStyle} onClick={toggleBoolean}>{value ? "Home" : "Cart"}
            </button>

        </div>
    );
}

export default Header;
