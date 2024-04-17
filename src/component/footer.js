import React from "react";
import "../style/footer-style.css"
// import facebook from "../assets/images/facebook-icon.png";
// import instagram from "../assets/images/instagram-icon.png";



export default function Footer () {
    const facebook = () => {
        window.location.href = "https://www.facebook.com/profile.php?id=100082531140785";
      };
      const instagram = () => {
        window.location.href = "https://www.instagram.com/gholam_saied_saied/";
      };
      const github = () => {
        window.location.href = "https://github.com/saied-rahimi";
      };
    return (
        <div className="footer">
            {/* <img className="icons"src={facebook}/>
            <img className="icons"src={instagram}/> */}

<a className="icons" onClick={facebook}>Facebook</a>
      <a className="icons"  onClick={instagram}>Instagram</a>
      <a className="icons"  onClick={github}>GitHub</a>
        </div>
    )
}