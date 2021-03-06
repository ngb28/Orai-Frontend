import React from 'react';
import {Header} from '../Header/header';
import { captureUserMedia } from './RecordUtils';
import {postVideo} from '../Utils/Orai-api';
import Webcam from './Webcam';
import RecordRTC from 'recordrtc';
import './Record.css';
import Button from 'material-ui/Button';
import {CircularProgress , LinearProgress } from 'material-ui/Progress';
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
        var obj = window.URL.createObjectURL(stream)
        this.setState({ src: obj  });
      });
    }

    startRecord() {
      captureUserMedia((stream) => {
        this.setState({ recording: true})
        this.state.recordVideo = RecordRTC(stream, { type: 'video' });
        this.state.recordVideo.startRecording();
      });

      //Stop recording after 5 minutes
      //change to designated recordRTC timer function at some point
      setTimeout(() => {
        this.stopRecord();
      }, 300000);
    }

    stopRecord() {
      this.state.recordVideo.stopRecording(() => {
        //this.save('test-recording');
        var blob = this.state.recordVideo.getBlob();
        var file = new File([blob], 'test.webm', {
          type: 'video/webm'
        });

        let video = {
          title: 'testRecord',
          data: file
        }
        console.log(video.data);
        postVideo(video);

        this.setState({
           recording: false
        });
      });
    }

    render() {
      return(
        <div>
          <Header title="Record"/>
          <div>
            <h1 className='title'>Video Recording</h1>
          </div>
          <div className='record-window'>
          {this.state.src?
            <Webcam src={this.state.src}/>
            :
            <CircularProgress size={50} />
           }
            </div>

          <div className='start-stop'>

          {this.state.recording ?
          <div>
             <LinearProgress color="secondary" />
            <Button color={"secondary"} fullWidth={true} variant="raised" onClick={this.stopRecord}>
                Stop Recording
            </Button>
            </div>
          :
          <div>
          <Button variant="raised" style={{backgroundColor:"white"}} fullWidth={true} onClick={this.startRecord}>
                Start Recording
           </Button>
           </div>
           }
            {/* <button ></button> */}
          </div>
        </div>
      )
    }
}
