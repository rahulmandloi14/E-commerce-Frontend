import React from "react";
import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"

const Footer = () => {
    return <footer className="footer">
            <div className="footer-content">
               <div className="col">
                <div className="title">About</div>
                <div className="text">we deliver services to fullfill the requirements of client. We hope that everyone should live everyone peacefully and save environment for the future generation</div>
               </div>
               <div className="col"><div className="title">Contact</div>
               <div className="c-item">
                <FaLocationArrow/>
                <div className="text">14/2 Suthalia Road Biaora (Rajgarh), Madhya Pradesh,465674</div>
               </div>
               <div className="c-item">
                <FaMobileAlt/>
                <div className="text">Phone: 07374-214174</div>
               </div>
               <div className="c-item">
                <FaEnvelope/>
                <div className="text">Email: storesbiaora@gmail.com</div>
               </div>
               </div>
               <div className="col"><div className="title">Categories</div>
               <span className="text">Headphones</span>
               <span className="text">Smart Watches</span>
               <span className="text">Bluetooth Speakers</span>
               <span className="text">Wireless Earbuds</span>
               <span className="text">Home Theatre</span>
               <span className="text">Projectors</span>
               </div>
               <div className="col"><div className="title">Pages</div>
               <span className="text">Home</span>
               <span className="text">About</span>
               <span className="text">Privacy Policy</span>
               <span className="text">Returns</span>
               <span className="text">Terms and conditions</span>
               <span className="text">Contact Us</span>
               
               </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        E-COMMERCE WEBSITE 2023 CREATED by Rahul
                    </div>
                    <img src={Payment}/>
                </div>
            </div>
     </footer>;
};

export default Footer;
