import React, { useState } from "react";
import "./Value.css";
import { questions } from "./Faqconst";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Value() {
  const [className , setClassName] =useState(null)
  return (
    <section className="v-wrapper">
      <div className="v-container">
        <div className="v-left">
          <div className="imgconatiner">
            <img src="/images/value.png" alt="valueimg"></img>
          </div>
        </div>
        <div className="v-right">
          <span className="ornagetexxt">Our Value</span>
          <span className="primarytext">Value We Give to You</span>
          <span className="secondrytext">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
            className="accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {questions.map((data, i) => (
              <AccordionItem className={`accordianitem ${className}`} key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="accordianbutton">
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded
                          ? setClassName("expanded")
                          : setClassName("collapsed")
                      }
                    </AccordionItemState>

                    <div className="icon">{data.icon}</div>
                    <span className="primarytext">{data.question}</span>
                    <div className="icon">
                      <IoIosArrowDropdown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondrytext">{data.answer}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
