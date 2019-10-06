import React, { Component } from "react";
import Image from "../Components/Image";
import "./Splash.css";

class Splash extends Component {
    render() {
        return (
            <div className="grad">
                <Image src="https://i.ibb.co/vX35mzH/splash-png-logo-text.png" alt="GREDA Logo"></Image>
            </div>
        );
    }
}

export default Splash;