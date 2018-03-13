import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from './home';
import {Sessions} from './Sessions/Sessions';
// import {Login} from './Login/Login';
import {Results} from './Results/Results';
import {readCookie} from './Login/cookie'
import {Record} from './Record/Record';
import {SSO_CREATE_URL,SSOURL} from './constants/index'

import './index.css';


class App extends React.Component {

  isEmpty(value){
    return (value == null || value.length === 0);
  }

  componentWillMount() {
    const isauthorized = this.isEmpty(readCookie('ORAI_AUTH'));
    console.log(isauthorized)
    if (isauthorized) {
      // console.log("authorized")
      this.setState({
        authorized: false,
      });
      return;
    }else{
      console.log("autormized")
      this.setState({
        authorized: true,
      }); 
    }
  }
  

  render() {
    console.log(this.state.authorized)

    // Redirect to auth
    if (!this.state.authorized) {
      if (window.location.pathname.startsWith('/signup')) {
        window.location = `${SSO_CREATE_URL}?redirect=${window.location.hostname}`;
      } else {
        window.location = `${SSOURL}?redirect=${window.location.href}`;
      }
      // unreachable
      return (<div />);
    }

    return(
      <BrowserRouter>
        <Switch>
          <Route exact path={'/Sessions'} component={Sessions} />
          <Route exact path={'/Results/:sid'} component={Results} />
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/Login'} component={() => window.location = SSOURL} />
          <Route exact path={'/Record'} component={Record} />
        </Switch>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
