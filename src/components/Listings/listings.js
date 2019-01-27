import React from 'react';
import './listings.css';

const Listings = (props) => {
  return (
    <div className="everything">     
  <div className="fl w-30 left-block upmargin">
  <h1 className="f4 white mv0 pv2 ph3 pt4 title">Upcoming Game Schedule</h1>
       <a className="db grow center mw5 black link block " title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

      
  <img className="db ba b--black-10 image"
       src="https://img.icons8.com/ios/50/000000/monday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9">Monday</dd>
    <dt className="clip">Artist</dt>
    <dd className="ml0 gray">Frank Ocean</dd>
  </dl>
  </a>

  <a className="db grow center mw5 black link block " title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

  <img className="db ba b--black-10 image"
       src="https://img.icons8.com/ios/50/000000/monday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9">Monday</dd>
    <dt className="clip">Artist</dt>
    <dd className="ml0 gray">Frank Ocean</dd>
  </dl>
  </a>
  <a className="db grow center mw5 black link block " title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

  <img className="db ba b--black-10 image"
       src="https://img.icons8.com/ios/50/000000/monday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9">Monday</dd>
    <dt className="clip">Artist</dt>
    <dd className="ml0 gray">Frank Ocean</dd>
  </dl>
  </a>
  <a className="db grow center mw5 black link block" title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

  <img className="db ba b--black-10 image"
       src="https://img.icons8.com/ios/50/000000/monday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9">Monday</dd>
    <dt className="clip">Artist</dt>
    <dd className="ml0 gray">Frank Ocean</dd>
  </dl>
  </a>
  <a className="db grow center mw5 black link " title="Frank Ocean's Blonde on Apple Music"
   href="https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg">

  <img className="db ba b--black-10 image"
       src="https://img.icons8.com/ios/50/000000/monday.png"/>
 <dl className="mt2 f6 lh-copy">
    <dt className="clip">Title</dt>
    <dd className="ml0 fw9">Monday</dd>
    <dt className="clip">Artist</dt>
    <dd className="ml0 gray">Frank Ocean</dd>
  </dl>
  </a>
  </div>


<div className="fl w-70 right-block">
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