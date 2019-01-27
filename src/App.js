import React, { Component } from 'react';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import BettingBoard from './components/BettingBoard/BettingBoard';
import Restaurant from './components/Restaurant/Restaurant';
import './App.css';
import Listings from './components/Listings/listings';
import Bar from './components/bar/bar';
import Landing from './components/Landing/Landing';
import Update from './components/BettingBoard/BettingUpdate'
import Map from './components/Map/Map'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userType:'',
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
      userType: data.userType
    }})
  }



  titleUpdate = (type)=>{
    this.setState({userType:type});
}
  displayFaceBox = (box) => {
    this.setState({box: box});
  }



  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }





  onRouteChange = (route) => {
    if (route === 'signout') {
      console.log('routing works')
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      console.log('routing works')
      this.setState({isSignedIn: true})
    } 
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;

    return (
      <div className="App">
<Map/>
        { route === 'home'
          ? <div>
            <Rank user = {this.state.user} onRouteChange={this.onRouteChange} userType = {this.state.userType} /> 
     
            </div>
          : 
            route === 'betting' 
          ? <BettingBoard onRouteChange={this.onRouteChange}/>
          : 
            route === 'bar' 
          ? <Bar onRouteChange={this.onRouteChange}/>
          : 
            route === 'restaurant' 
          ? <Restaurant onRouteChange={this.onRouteChange}/>
          : 
          route === 'listings'
          ? <Listings onRouteChange={this.onRouteChange}/>
          :
            route === 'landing'
          ? <Landing onRouteChange={this.onRouteChange}/>
          :
          route === 'update'
          ? <Update onRouteChange={this.onRouteChange}/>
          :
          (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} signUpType={this.titleUpdate}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} signUpType={this.state.userType}/>
            )
           
        }
      </div>
    );
  }
}

export default App;
