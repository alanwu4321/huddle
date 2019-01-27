import React from 'react';
import '../Signin/signin.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post', //on the body so the server be retriving req.body 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => { //user is data
        if (user) {
          this.props.loadUser(user)  //just straight up call the app.js methdod
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return (
      <div className="outer">
      <article className="outer middle br3 ba b--black-10 mt3 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
          <img className="logosignin" src={require("../../assets/black.png")} />
            <fieldset id="sign_up" className="ba white b--transparent ph0 mh0">
            
              <legend className="f1 fw6 ph0 mh0 signintext">{this.props.signUpType}</legend>
              <div className="mv3">
                <label className="db pw fw6 lh-copy f6" htmlFor="password">Name</label>
                <input
                  className="b pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mv3">
                <label className="db pw fw6 lh-copy f6" htmlFor="password">Username</label>
                <input
                  className="b pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db email fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent  w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
              <div className="mv3">
                <label className="db pw fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b signinb ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3">
              
            </div>
          </div>
        </main>
      </article>
      </div>
    );
  }
}

export default Register;