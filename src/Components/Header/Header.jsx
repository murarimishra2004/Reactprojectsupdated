import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

import "./Header.css";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const getMenuStyles=(menu)=>{
    if(document.documentElement.clientWidth <= 800){
      return {right: !menu && "-100%"}
    }
  }

  return (
    <div className="h-wrapper">
      <div className="h-conatiner">
        <img src="/images/logo.png" alt="logo" width={100} />

        <div className="h-menu"  style={getMenuStyles(menu)}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        <div className="menu-icon" onClick={() => setMenu(!menu)}>
          <HiMenuAlt1 size={30} />
        </div>
      </div>
    </div>
  );
}
