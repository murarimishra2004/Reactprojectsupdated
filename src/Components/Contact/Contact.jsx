import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="c-wrapper">
      <div className="c-container">
        <div className="c-left">
          <span className="ornagetexxt">Our Contact Us</span>
          <span className="primarytext">Easy to contact us</span>
          <span className="secondrytext">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="contactmodes">
            <div className="row">
              <div className="mode">
                <div className="flexstart">
                  <div className="flexcenter icon">
                    <MdCall />
                  </div>
                  <div className="cdetails">
                    <span className="primarytext">Call</span>
                    <span className="secondrytext">011 123 456 78</span>
                  </div>
                </div>
                <div className="flexcenter button">Call Now</div>
              </div>
              <div className="mode">
                <div className="flexstart">
                  <div className="flexcenter icon">
                  <IoChatboxEllipsesOutline />
                  </div>
                  <div className="cdetails">
                    <span className="primarytext">Chat</span>
                    <span className="secondrytext">011 123 456 78</span>
                  </div>
                </div>
                <div className="flexcenter button">Chat Now</div>
              </div>
            </div>
            <div className="row">
              <div className="mode">
                <div className="flexstart">
                  <div className="flexcenter icon">
                  <IoChatboxEllipsesOutline />
                  </div>
                  <div className="cdetails">
                    <span className="primarytext"> Video Call</span>
                    <span className="secondrytext">011 123 456 78</span>
                  </div>
                </div>
                <div className="flexcenter button">Video Call Now</div>
              </div>
              <div className="mode">
                <div className="flexstart">
                  <div className="flexcenter icon">
                  <FiMessageSquare />
                  </div>
                  <div className="cdetails">
                    <span className="primarytext">Message</span>
                    <span className="secondrytext">011 123 456 78</span>
                  </div>
                </div>
                <div className="flexcenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="imgconatiner">
            <img src="./images/contact.jpg" alt="contact img"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
