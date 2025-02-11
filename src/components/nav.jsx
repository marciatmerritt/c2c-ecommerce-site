import React from "react";
import acct from "/assets/acct";
import cart from "/assets/cart";
import logo from "/assets/logo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-items">
          <img className="icons" src={logo} alt=""></img>
          <input
            type="text"
            className="search-box"
            placeholder="search"
          ></input>
          <button className="search-btn">search</button>
          <img className="icons" src={acct} alt=""></img>
          <img className="icons" src={cart} alt=""></img>
        </div>
        <div id="links">
          <Link className="navlink" to="/">
            <p> Home </p>
          </Link>
          <Link className="navlink" to="/shopping">
            <p> Shopping </p>
          </Link>
          <Link className="navlink" to="/about">
            <p> About Us </p>
          </Link>
          <Link className="navlink" to="/account">
            <p> Account </p>
          </Link>
          <Link className="navlink" to="/contact">
            <p> Contact </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
