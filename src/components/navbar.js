import React from "react";
import './navbar.css';
import { Link }   from "react-router-dom";
 export const Navbar=()=>
 {
    return(
        <div className="navbar">
      <div className="links">

        <link to="/">Shop</link>
        <link to="/cart">U+F242</link>

      </div>
        </div>
    )
 }
