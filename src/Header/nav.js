import React from 'react';
import {Link} from 'react-router-dom';

export class Nav extends React.Component {
  render() {
    return(
      <nav>
        <ul className="navbar">
          <li><Link to='/' style={{textDecoration: 'none'}}>Home</Link></li>
          <li><Link to='/Sessions' style={{textDecoration: 'none'}}>Sessions</Link></li>
          <li><button>Sign Out</button></li>
        </ul>
      </nav>
    );
  }
}