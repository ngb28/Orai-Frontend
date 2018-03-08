import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from './Header/header';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // upload() {
  //
  // }

  render() {
    return(
      <div>
        <Header title={"Home"} />
        <div className = "Up-Rec-Box">
          <ul className="Upload-Record">
            <li><Link to='/Record' style={{textDecoration: 'none'}}>Record</Link></li>
            <li><p>Or</p></li>
            <li><button>Upload</button></li>
          </ul>
        </div>
      </div>
    );
  }
}
