import React from "react";
import ReactDOM from "react-dom";

var date = new Date();
var year = date.getFullYear();

function Footer(){
    return <footer>Copyright {year}</footer>
}

export default Footer;