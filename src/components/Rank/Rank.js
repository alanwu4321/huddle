import React from 'react';
import './Rank.css';




const Rank = (props) => {





 
  console.log(props.user)

  fetch(`http://localhost:3001/profile/${props.user.id}`)
  .then(response => response.json()) //so we can read the response from the server
  .then(user => {
    if (user.id) {  //if there is an id 
     
           }
    
      
    })

  
  return (
    <div>
      <div className="flex justify-center">
        <div className=" w-20 pa3 mr2">
          <img src={require("./bill.jpg")} />
        </div>

        <div class=" w-70 pa3 mr2">
          <h1 className="bigguy navy">{props.user.name} </h1>
          <h2 className="white f2">{props.user.userType}</h2>
          <h3 className="blue ilovebill">"Die Hard New England Patriots Fan"</h3>
          
          <h4 className="details">Age: 24<br></br>Location: Markham, Ontario <br></br><hr></hr> Win/Loss Ratio: 24/48 (50%) <br></br>
            Winnings: $621.56
          </h4>
  
        </div>

       
      </div>

      <div className="flex justify-center">
        <div className=" w-80 pa3 mr2">
          <h2 className="navy"> Betting History </h2>
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
          <a onClick={() => props.onRouteChange('listings')} className="f3 no-underline br-pill ph3 pv2 mb2 dib white bg-blue buttonCustom">Listings</a>
        </div>
      </div>




    </div>


  );
}

export default Rank;
