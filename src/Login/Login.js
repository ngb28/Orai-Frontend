import React from 'react';
import './Login.css';
import logo from '../logo.svg';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    }
  }

  render() {
    return(
      <div>
        <h1 className="Login-Header">
          <img src={logo} className="Orai-Logo" />
          <h2>Orai</h2>
        </h1>
        <button>Login</button>
      </div>
    );
  }
}
