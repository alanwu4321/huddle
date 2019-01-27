import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import BettingBoard from './components/BettingBoard/BettingBoard';
import Restaurant from './components/Restaurant/Restaurant';
import './App.css';
import Listings from './components/Listings/listings';
import Bar from './components/bar/bar';
import Landing from './components/Landing/Landing';


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      userType:'',
      input: '',
      imageUrl: '',
      box: {},
      isSignedIn: true,
      route: 'home',
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
      joined: data.joined
    }})
  }

  
// componentDidMount(){

// fetch('http://localhost:3000/')
// .then(response => response.json()) //so we can read the response from the server
// .then(console.log)

// }


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {   //returning an object
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
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



  // onButtonSubmit = () => {
  //   this.setState({imageUrl: this.state.input});
  //   app.models
  //     .predict(
  //       Clarifai.FACE_DETECT_MODEL,
  //       this.state.input)
  //     .then(response => { //run this only if we have a response from Clarifi, unlike other method
  //       if (response) { //as long as we have a response
  //         fetch('http://localhost:3000/image', {
  //           method: 'put', //updating the user info
  //           headers: {'Content-Type': 'application/json'},
  //           body: JSON.stringify({
  //             id: this.state.user.id
  //           })
  //         })
  //           .then(response => response.json())
  //           .then(count => {   //Object will keep object the same
  //             this.setState(Object.assign(this.state.user, { entries: count}))
  //           })

  //       }
  //       this.displayFaceBox(this.calculateFaceLocation(response))
  //     })
  //     .catch(err => console.log(err));
  // }

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
        { route === 'home'
          ? <div>
            <Rank></Rank>
              {/* <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              /> */}
              {/* <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl} /> */}
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
