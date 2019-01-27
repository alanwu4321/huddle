import React from 'react';
import './listings.css';

const Listings = (props) => {
  return (
    <div className="everything">     
  <div className="fl w-25 left-block upmargin">
  <h1 className="f3 black mv0 pv2 ph3 mt4 title">Upcoming Game Schedule</h1>
       <a className="db grow center mw5 black link block " title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

      
  <img className="db b--black-10 image"
       src="https://img.icons8.com/ios/50/000000/friday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9">Friday</dd>
    <dt className="clip">Artist</dt>
    <dd className="ml0 gray">Buccaneers VS Falcons</dd>
  </dl>
  </a>

  <a className="db grow center mw5 black link block " title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

  <img className="db b--black-10 image"
       src="https://img.icons8.com/ios/50/000000/saturday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9">Saturday</dd>
    <dt className="clip">Artist</dt>
    <dd className="ml0 gray">Vikings VS Titans</dd>
  </dl>
  </a>
  <a className="db grow center mw5 black link block " title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

  <img className="db image"
       src="https://img.icons8.com/ios/50/000000/sunday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9">Sunday</dd>
    <dt className="clip">Artist</dt>
    <dd className="ml0 gray">Bears VS Texans</dd>
  </dl>
  </a>
  <a className="db grow center mw5 black link block" title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

  <img className="db b--black-10 image"
       src="https://img.icons8.com/ios/50/000000/tuesday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9">Tuesday</dd>
    <dt className="clip">Artist</dt>
    <dd className="ml0 gray">Dolphins VS Seahawks</dd>
  </dl>
  </a>
  <a className="db grow center mw5 black link " title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

  <img className="db b--black-10 image"
       src="https://img.icons8.com/ios/50/000000/wednesday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9">Wednesday</dd>
    <dt className="clip">Artist</dt>
    <dd className="ml0 gray">Packers VS Jaguars</dd>
  </dl>
  </a>
  </div>


<div className="fl w-75 right-block">
    <div onClick={() => props.onRouteChange('game')} className="game-tile grow">
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
    <div onClick={() => props.onRouteChange('game')} className="game-tile grow">
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