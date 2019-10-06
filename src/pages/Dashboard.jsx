
import React from "react";
import Image from '../Components/Image'
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="wrapper">
            <Link to="/recycle">
                <Image src='./images/go-recycle.png' style={{ "margin": "10px" }} />
            </Link>
            <Link to="/">
                <Image src='./images/go-share.png' style={{ "margin": "10px" }} />
            </Link>
            <Link to="/">
                <Image src='./images/go-learn.png' style={{ "margin": "10px" }} />
            </Link>
        </div>
    )
}

export default Dashboard;
