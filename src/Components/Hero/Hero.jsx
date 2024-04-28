import React from "react";
import "./Hero.css";

import { IoLocationSharp } from "react-icons/io5";
import CountUp from "react-countup";
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-conatiner">
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{y: "2rem" ,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{
              duration:2,
              type: "spring"
            }}
            >
              Discover <br /> Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className="hero-des" >
            <span className="secondrytext">Find a variety of properties that suit you very easilty</span>
            <span className="secondrytext">Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="search-bar">
            <IoLocationSharp color="#4066FF" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="stats">
            <div className="stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondrytext">Premium Product</span>
            </div>
            <div className="stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondrytext">Happy Customer</span>
            </div>
            <div className="stat">
              <span>
                <CountUp  end={28} />
                <span>+</span>
              </span>
              <span className="secondrytext">Awards Winning</span>
            </div>
          </div>
          
        </div>

        <div className="hero-right">
          <motion.div 
          initial={{x:"7rem" ,opacity:0}}
          animate={{x:0 ,opacity:1}}
          transition={{
            duration:2,
            type: "ease-in"
          }}
          className="imgconatiner">
            <img src="/images/hero-image.png" alt="HeroImage"></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
