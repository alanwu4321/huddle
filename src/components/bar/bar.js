import React from 'react';
import './bar.css';

const Bar = (props) => {
  return (
        <div className="everything">   
            <div className="title">
                <div className="fl w-20 title-first">
                <img src={require("../../assets/neweng.png")} />
                </div>
                <div className="fl w-60">
                <h2>New England Patriots vs Los Angeles Rams</h2>
                </div>
                <div className="fl w-20 title-last" >
                <img src={require("../../assets/rams.png")} />
                </div>
            </div>  
            <br></br>
            <br></br>
            <div className="bar-tile grow">
                <div className="tile-top"></div>
                <div className="fl w-20 bar-tile-img">
                    <img src={require("../../assets/real-sports.png")} />
                </div>
                <div className="fl w-40 bar-tile-main">
                    <h2>Real Sports Bar & Grill</h2>
                    <h3>@15 York Street, Toronto, CA</h3>
                </div>
                <div className="fl w-40 bar-tile-bet">
                    <h2>Prize Pool: $550</h2>
                    <h3>Minimum Bet: $10</h3>
                </div>
            </div>
            <div className="bar-tile grow">
                <div className="tile-top"></div>
                <div className="fl w-20 bar-tile-img">
                    <img src={require("../../assets/stlouis.png")} />
                </div>
                <div className="fl w-40 bar-tile-main">
                    <h2>St Louis Bar & Grill</h2>
                    <h3>@595 Bay Street, Toronto, CA</h3>
                </div>
                <div className="fl w-40 bar-tile-bet">
                    <h2>Prize Pool: $150</h2>
                    <h3>Minimum Bet: $5</h3>
                </div>
            </div>
        </div>  
  );
}

export default Bar;