import React from 'react';
import './listings.css';

const Listings = (props) => {
  return (
    <div className="everything">     
  <div className="fl w-30 left-block upmargin">

  <h1 className="f4 white mv0 pv2 ph3 pt4 title">Upcoming Game Schedule</h1>
       <a className="db grow center mw5 black link block " title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">
    <br></br>
      
  <img className="db ba b--black-10 image"
       src="https://img.icons8.com/ios/50/ffffff/monday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9 white">Monday</dd>
  </dl>
  </a>

  <a className="db grow center mw5 black link block " title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

  <img className="db ba b--black-10 image"
       src="https://img.icons8.com/ios/50/ffffff/tuesday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9 white"> Tuesday</dd>
  </dl>
  </a>
  <a className="db grow center mw5 black link block " title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

  <img className="db ba b--black-10 image"
       src="https://img.icons8.com/ios/50/ffffff/wednesday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9 white">Wednesday</dd>
  </dl>
  </a>
  <a className="db grow center mw5 black link block" title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

  <img className="db ba b--black-10 image"
       src="https://img.icons8.com/ios/50/ffffff/thursday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9 white">Thursday</dd>
  </dl>
  </a>
  <a className="db grow center mw5 black link " title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

  <img className="db ba b--black-10 image"
       src="https://img.icons8.com/ios/50/ffffff/friday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9 white">Friday</dd>
  </dl>
  </a>
  </div>


<div className="fl w-70 right-block-two">
    <div onClick={() => props.onRouteChange('game')} className="game-tile-two grow">
        <div className="tile-title-two"><h3>SuperBowl LII: Sunday, February 3rd, 2019</h3></div>
        <div className="versus-content-two">
            <div className="fl w-40 team-first-two">
                <img src={require("../../assets/neweng.png")} />
                <h4>New England Patriots</h4>
            </div>
            <div className="fl w-20 versus-two">
                <h1>VS</h1>
            </div>
            <div className="fl w-40 team-last-two">
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