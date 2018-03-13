import React from 'react';
import {Link} from 'react-router-dom';
import home from './home.svg';
import power from './power.svg';
import sessions from './sessions.svg';

export class Nav extends React.Component {
  render() {
    return(
      <nav>
        <ul className="navbar">
          <li><Link to='/'><img src={home}/></Link></li>
          <li><Link to='/Sessions' ><img src={sessions}/></Link></li>
          <li><Link to='/Login'><img src={power}/></Link></li>
        </ul>
      </nav>
    );
  }
}
