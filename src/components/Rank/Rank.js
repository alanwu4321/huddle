import React from 'react';
import './Rank.css';
import { Container, Row, Col } from 'reactstrap';


export default class Rank extends React.Component {

  render() {
    return (
      <div>
        <div className="flex justify-center">
          <div className=" w-20 pa3 mr2">
            <img src={require("./bill.jpg")} />
          </div>
          <div class=" w-40 pa3 mr2">
            <h1 className="black f2">Bill Sheng</h1>
            <h3 className="blue">Die Hard New England Patriots Fan</h3>
          </div>
          <div className=" w-20 pa3 mr2">
            <p className="black">Age: 24 <br></br> Location: Markham, Ontario <br></br><br></br> Win/Loss Ratio: 24/48 (50%) <br></br>
              Winnings: $621.56
          </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" w-80 pa3 mr2">
            <h3 className="brown"> Betting History </h3>
            <h3 className="yellow"> Bill put the fat ass card here </h3>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" w-80 pa3 mr2" id="btn-row">
            <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black"  href="#0">Listings</a>
          </div>
        </div>


      </div>

    );
  }
}
