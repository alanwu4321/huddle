import React from 'react';
import './Rank.css';
import { Container, Row, Col } from 'reactstrap';


export default class Rank extends React.Component {

  render() {
    return (
<div>
      <div className="flex justify-center">
        <div className="outline w-20 pa3 mr2">
          <img className="iconpic" src="./bill.jpg"></img>
        </div>
        <div class="outline w-40 pa3 mr2">
          <h1 className="white f2">Bill Sheng</h1>
          <h3 className="white">Die Hard New England Patriots Fan</h3>
        </div>
        <div className="outline w-20 pa3 mr2">
          <p className="white">Age: 24 <br></br> Location: Markham, Ontario <br></br><br></br> Win/Loss Ratio: 24/48 (50%) <br></br>
            Winnings: $621.56
          </p>  
        </div>
      </div>
    <div className="flex lf">
    <h3 className="white"> Betting History </h3>
    </div>
      

    </div>

            );
          }
    }
