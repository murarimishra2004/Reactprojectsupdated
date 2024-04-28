import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="f-wrapper">
      <div className="f-conatiner">
        <div className="f-left">
          <img src="./images/logo2.png" alt="logo2" width={120}></img>
          <span className="secondrytext">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </span>
        </div>
        <div className="f-right">
          <span className="primarytext ">Information</span>
          <span className="secondrytext">145 New York, FL 5467, USA</span>
          <div className="f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
