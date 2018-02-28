import React from 'react';
import {Header} from '../Header/header';
import './Record.css';

export class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camPerm:false,
      micPerm:false
    }
  }

  render() {
    return(
      <div>
        <Header title="Record"/>
        <div>
          <h1>Video Recording</h1>
          <ul>
            <li>Camera Permission: </li>
            <li>Microphone Permission: </li>
          </ul>
        </div>
      </div>
    );
  }
}
