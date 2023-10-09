import React from "react";
import facebookImage from "../images/Facebook.png";
import instagramImage from "../images/instagram.png";
import pinterestImage from "../images/pinterest.png";
import twitterImage from "../images/twitter.png";

function Footer() {
    return (
        <div className="footer-container">



            <div className="footer-contact">
                <h3>Contact Us</h3>
                <p>
                    123 Main Street<br />
                    City, State ZIP<br />
                    Email: info@example.com<br />
                    Phone: (123) 456-7890
                </p>
            </div>

            <div className="iconDiv">

                <img src={facebookImage} alt="Facebook" className="Iconimages" />
                <img src={instagramImage} alt="Instagram" className="Iconimages" />
                <img src={pinterestImage} alt="Pinterest" className="Iconimages" />
                <img src={twitterImage} alt="Twitter" className="Iconimages" />

            </div>




        </div>

    );
}

export default Footer;