import React from 'react';
import {Header} from '../Header/header';
import './Sessions.css';

export class Sessions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions:[],
    }
  }

  getData() {

  }

  render() {
    return(
      <div>
        <Header title={"Sessions"}/>
        <div>
          <h1 className="title">Previous Recordings</h1>
          <ul className="table-head">
            <li>Title</li>
            <li>Date</li>
            <li>Duration</li>
          </ul>
        </div>
      </div>
    );
  }
}
