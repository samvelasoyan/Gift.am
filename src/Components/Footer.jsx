import React from "react";
import background from "../images/IMG_14224.jpg";

export default function Footer() {
    return (
        <div
            className="footer"
            id="aboutUs"
            style={{ background: `url(${background}) no-repeat`, backgroundSize: "cover" }}
        >
            <div className="footer-left">
                <h1>Gift.am</h1>
            </div>
            <div className="footer-centre">
                <div>
                    <h3>about us</h3>
                    <p>delivery and payment</p>
                    <p>privacy policy</p>
                    <p>contact us</p>
                </div>
                <div>
                    <h3>tags</h3>
                    <span>#forWomen,</span>
                    <span>#forMen,</span>
                    <span>#forKids,</span>
                    <span>#perfume,</span>
                    <span>#jewelry,</span>
                    <span>#watches,</span>
                    <span> #flowers,</span>
                    <span>#teddybear,</span>
                    <span>#beverage,</span>
                    <span>#sweet,</span>
                    <span>#cakes,</span>
                    <span> #baskets,</span>
                    <span>#balloons,</span>
                    <span>#wine,</span>
                    <span>#roses,</span>
                    <span>#silver,</span>
                    <span>#whiskey,</span>
                    <span> #candy,</span>
                    <span>#giantTeddy,</span>
                    <span>#chocolate,</span>
                    <span>#christmas,</span>
                    <span>#birthday,</span>
                    <span> #helloween,</span>
                    <span>#newYear,</span>
                    <span>#valentine,</span>

                </div>
            </div>
            <div className="footer-right">
                <span className="soc-icon">
                    <i className="fab fa-facebook-f"></i>
                </span>
                <span className="soc-icon">
                    <i className="fab fa-twitter"></i>
                </span>
                <span className="soc-icon">
                    <span></span>
                    <i className="fab fa-instagram"></i>
                </span>
                <h1>Find us online!</h1>
            </div>
            <div className='to-top'>
                <a href="#home"><i className='fas fa-arrow-up'></i></a>
            </div>
        </div>
    );
}
