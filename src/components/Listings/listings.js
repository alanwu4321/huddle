import React from 'react';
import './listings.css';

const Listings = (props) => {
  return (
    <div>
       <div className="fl w-30 left-block">

       </div>
       <div className="fl w-70 right-block">
            <div className="game-tile grow">
                <div className="tile-title"><h3>SuperBowl LLI: Sunday, February 3rd, 2019</h3></div>
                <div className="versus-content">
                    <div className="fl w-40 team-first">
                        <img src={require("../../assets/neweng.png")} />
                        <h4>New England Patriots</h4>
                    </div>
                    <div className="fl w-20 versus">
                        <h1>VS</h1>
                    </div>
                    <div className="fl w-40 team-last">
                        <img src={require("../../assets/rams.png")} />
                        <h4>Los Angeles Rams</h4>
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
}

export default Listings;