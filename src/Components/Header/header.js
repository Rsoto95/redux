import React from "react";
import { useState, useEffect } from "react";
import "./header.css";
import wallPaper from "./wallpaper.jpg";
import legacyLogo from "./legacyLogo.png";
import hamburgerIcon from "./hamburgerIcon.png";
import { Link } from "react-router-dom";
import { getAuth } from "@firebase/auth";


function Header() {

 

  let navigation = () => {
    return (
      <div className="navigationContainer">
        <Link
          to="/"
          className="navigationText"
          onClick={() => {
            setHamburger("hamburger");
            console.log(getAuth().currentUser)
            console.log('click');
          }}
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className="navigationText"
          onClick={() => {
            setHamburger("hamburger");
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/Ranking"
          className="navigationText"
          onClick={() => {
            setHamburger("hamburger");
          }}
        >
          Ranking
        </Link>
      
        <Link
          to="/about-us"
          className="navigationText"
          onClick={() => {
            setHamburger("hamburger");
          }}
        >
          About us
        </Link>
    
        <Link
          to="/contact-us"
          className="navigationText"
          onClick={() => {
            setHamburger("hamburger");
          }}
        >
          Contact us
        </Link>
        
      </div>
    );
  };

  console.log('hooo',getAuth())

  const [hamburger, setHamburger] = useState("hamburger");

  return (
    <header>
      <img className="wallPaper" src={wallPaper} />
      <img src={legacyLogo} className="legacyLogo" />


      <nav className="navigation">{navigation()}</nav>
      <div className="hamburger-container">
        <img
          id="hamburger"
          onClick={() => {
            switch (hamburger) {
              case "hamburger":
                setHamburger("hamburger-visible");
                break;
              case "hamburger-visible":
                setHamburger("hamburger");
                break;

              default:
                setHamburger("hamburger");
                break;
            }
          }}
          src={hamburgerIcon}
        />
        <nav className={hamburger}>{navigation()}</nav>
      </div>
    </header>
  );
}

export default Header;
