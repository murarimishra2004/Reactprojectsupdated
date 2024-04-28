import React from "react";
import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/Silder.js";
import { sliderSettings } from "../../utils/common.js";

export default function Residencies() {
  return (
    <section className="r-wrapper">
      <div className="r-container">
        <div className="r-head">
          <span className="ornagetexxt">Best Choices</span>
          <span className="primarytext">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={card.image} alt={card.name} />
                <span className="secondrytext r-price">
                  <span style={{color: "orange"}}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primarytext">{card.name}</span>
                <span className="secondrytext">{card.details}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const SliderButtons = ()=>{
  const swpier = useSwiper();
  return(
    <>
    <div className="r-button">
      <button onClick={()=> swpier.slidePrev()}>&lt;</button>
      <button onClick={()=> swpier.slideNext()}>&gt;</button>

    </div>
    </>
  )
}
