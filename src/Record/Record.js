import React from 'react';
import {Header} from '../Header/header';
import { captureUserMedia } from './RecordUtils';
import Webcam from './Webcam';
import RecordRTC from 'recordrtc';
import './Record.css';

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia || navigator.msGetUserMedia);

export class Record extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        recordVideo: null,
        src: null,
        recording: false
      };

      this.requestUserMedia = this.requestUserMedia.bind(this);
      this.startRecord = this.startRecord.bind(this);
      this.stopRecord = this.stopRecord.bind(this);
    }

    componentDidMount() {
      if(!hasGetUserMedia) {
        alert("Webcam not supported by this browser. Please switch to Chrome or Firefox.");
        return;
      }
      this.requestUserMedia();
    }

    requestUserMedia() {
      captureUserMedia((stream) => {
        this.setState({ src: window.URL.createObjectURL(stream) });
      });
    }

    startRecord() {
      captureUserMedia((stream) => {
        this.setState({ recording: true})
        this.state.recordVideo = RecordRTC(stream, { type: 'video' });
        this.state.recordVideo.startRecording();
      });

      //Stop recording after 5 minutes
      setTimeout(() => {
        this.stopRecord();
      }, 300000);
    }

    stopRecord() {
      this.state.recordVideo.stopRecording(() => {
        let params = {
          type: 'video/webm',
          data: this.state.recordVideo.blob,
          id: Math.floor(Math.random()*90000) + 10000
        }
        this.setState({ recording: false });
      });
      // still needs code for handling video blob after recording ends
    }

    render() {
      return(
        <div>
          <Header title="Record"/>
          <div>
            <h1 className='title'>Video Recording</h1>
          </div>
          <div className='record-window'><Webcam src={this.state.src}/></div>
          {this.state.recording ?
            <div className='status'>Recording...</div> : null}
          {this.state.recording ?
            <div className='start-stop'><button onClick={this.stopRecord}>Stop Recording</button></div> : <div className='start-stop'><button onClick={this.startRecord}>Start Recording</button></div>}
        </div>
      )
    }
}
