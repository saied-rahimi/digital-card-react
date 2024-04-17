import React from "react";
import "../style/main-style.css"
import Info from "./info";
import About from "./about";
import Interests from "./interests";
import Footer from "./footer";

export default function Main (){
    return(
        <div className="main-div">
        <Info />
        <About />
        <Interests />
        <Footer />
        </div>
    )
}