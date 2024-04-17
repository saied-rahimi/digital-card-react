import React from "react";
import saied_img from "../assets/images/saied.png";
import "../style/info-style.css"


export default function Info (){ 
     const handleEmailClick = () => {
    window.location.href = "mailto:saied.r.2016@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.location.href = "https://www.linkedin.com/in/saied-rahimi/";
  };
    return(
        <div>
            <img className="profile-img" src={saied_img}></img>
            <h1 className="name">Saied Rahimi</h1>
            <p className="position">Software Engeneer</p>
            <p className="email">saied.r.2016@gmail.com</p>
            <div className="buttons">
            <button className="email-button" onClick={handleEmailClick}><h3>email</h3></button>
            <button className="linkedin-button" onClick={handleLinkedInClick}><h3>Linkedin</h3></button>
            </div>
         </div>
    )
} 