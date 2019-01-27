import React from 'react';
import './Landing.css';

const Landing = (props) => {
    return (
        <div>

                <img className="landingLogo grow" src={require("../../assets/black.png")} />
                <h1 className="stupidName">"Reinventing Game Night"</h1>
                <a className="idontlikereact" href="#0"><h5 className="createdBy">Created by Alan Wu, Bill Sheng, Alan Xie, and Patrick Du with ❤️</h5></a>

        </div>
    );
}

export default Landing;

