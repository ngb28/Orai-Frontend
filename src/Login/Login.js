import React from 'react';
import {Header} from '../Header/header';
import './Sessions.css';

export class Sessions extends React.Component {
  getData() {

  }

  render() {
    return(
      <div>
        <Header title={"Sessions"}/>
        <div>
          Processed Sessions
        </div>
      </div>
    );
  }
}
