import React from 'react';
import './Rank.css';

const Rank = (props) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" w-20 pa3 mr2">
          <img src={require("./bill.jpg")} />
        </div>

        <div class=" w-40 pa3 mr2">
          <h1 className="black bigguy">Bill Sheng</h1>
          <h3 className="blue ilovebill">Die Hard New England Patriots Fan</h3>
        </div>

        <div className=" w-20 pa3 mr2">
          <h4 className="black details">Age: 24 <br></br> Location: Markham, Ontario <br></br><br></br> Win/Loss Ratio: 24/48 (50%) <br></br>
            Winnings: $621.56
          </h4>
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" w-80 pa3 mr2">
          <h2 className="brown"> Betting History </h2>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="donkeybox">
          <div className="donkeyheader"><h3>NFL Playoffs Championships: Sunday January 20th 2019</h3></div>
          <div className="donkey-content">

            <div className="fl w-40 teamdonkey1">
              <img src={require("../../assets/neweng.png")} />
              <h4 className="green">New England Patriots (33%)</h4>
            </div>

            <div className="fl w-20 donkeyversus">
              <h1>VS</h1>
            </div>

            <div className="fl w-40 teamdonkey2">
              <img src={require("../../assets/onlyforprofile.png")} />
              <h4>Los Angeles Rams (67%)</h4>

            </div>

          </div>

        </div>
      </div>

      <div className="flex justify-center">
        <div className=" w-80 pa3 mr2" id="btn-row">
          <a className="f6 no-underline br-pill ph3 pv2 mb2 dib white bg-black" href="#0">Listings</a>
        </div>
      </div>




    </div>


  );
}

export default Rank;
