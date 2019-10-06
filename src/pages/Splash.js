import React, { Component } from "react";
import Image from "../Components/Image";
import "./Splash.css";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <Link to="/home">
      <div className="splash-screen splash-screenOverlay ">
        <Image
          src="https://i.ibb.co/WtRGzd7/Greda-Splash-logo-1.png"
          alt="GREDA Logo"
        ></Image>
      </div>
    </Link>
  );
};

// class Splash extends Component {
//     render() {
//         return (
//             <div className="grad">
//                 <Image src="https://i.ibb.co/ySbtKYV/Greda-Splash-logo-2x.png" alt="GREDA Logo"></Image>
//             </div>
//         );
//     }
// }

export default Splash;
