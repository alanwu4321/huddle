import React from 'react';
import './BettingBoard.css';

const BettingBoard = (props) => {
  return (
    <div>
      <div className="flex justify-center">

        <div className=" w-25 pa3 mr2">

          <div className="logo-box">
            <img className="neweng" src={require("../../assets/neweng.png")} />
            <h1 className="centerboidem">56%</h1>
          </div>


          <div className="darkblue-box">
          </div>

          <div className="info-box">
            <br></br>
            <h3>Previous Game Score</h3>
            <h5>37 - 31 vs Kansas City</h5>
            <h3>Record</h3>
            <h5>(13W - 5L)</h5>
            <h3>Key Players</h3>
            <h5>Tom Brady</h5>
            <h5>Rob Gronkowski</h5>
            <a className="f6 no-underline br-pill ph3 pv2 mb2 dib white bg-black" href="#0">Place bet!</a>
          </div>


        </div>

        <div className=" w-25 pa3 mr2 centerboidem">

          <img className="iconhuddle" src={require("../../assets/black.png")} />
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <h1>Super Bowl LIII</h1>
          <h4>New England Patriots vs Los Angeles Rams</h4>
          <img className="iconnfl" src={require("../../assets/nfl.png")}></img>
          <h5>Sunday, Feb. 3rd @ 6:30 PM ET</h5>

          <br></br>
          <form class="pa4 ">
            <div class="measure">
              <label for="name" class="f6 b db mb2">Amount ($) </label>
              <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"></input>
              <small id="name-desc" class="f6 black-60 db mb2">Please enter your bet </small>
            </div>
          </form>

        </div>

        <div className=" w-25 pa3 mr2">
          <div className="logo-box">
            <img className="rams" src={require("../../assets/rams.png")} />
            <h1 className="centerboidem">44%</h1>
          </div>


          <div className="darkblue-box">
          </div>

          <div className="info-box">
            <br></br>
            <h3>Previous Game Score</h3>
            <h5>26 - 23 vs New Orleans</h5>
            <h3>Record</h3>
            <h5>(15W - 3L)</h5>
            <h3>Key Players</h3>
            <h5>Todd Gurley</h5>
            <h5>Aaron Donald</h5>
            <a className="f6 no-underline br-pill ph3 pv2 mb2 dib white bg-black" href="#0">Place bet!</a>
          </div>
        </div>

      </div>
    </div >
  );
}

export default BettingBoard;