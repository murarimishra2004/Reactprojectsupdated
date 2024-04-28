import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import Getstarted from "./Components/Getstarted/Getstarted";
import Footer from "./Components/Footer.jsx/Footer";

export default function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <Footer/>
    </div>
  );
}
