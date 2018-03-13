import React from 'react';
import { Header } from '../Header/header';
import './Results.css';
import { Player,BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";
import SessionManager from '../managers/session';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../Login/cookie.js'
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import ListSubheader from 'material-ui/List/ListSubheader';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
// import ImageIcon from 'material-ui-icons/Image';
import Power from 'material-ui-icons/Power';



export class Results extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      videosrc: '',
      results: null
    };
    this.seek = this.seek.bind(this);
  }

  componentDidMount() {
    const { sid } = this.props.match.params;
    // console.log(sid);
    var jwt = getCurrentUser();
    SessionManager.fetchSession(sid, jwt['uid']).then((response) => {
      this.setState({
        videosrc: response.videoURL,
        results: response.results
      });
      // console.log(response);
      console.log(this.refs)
      this.seek = this.seek.bind(this);
    })

    // this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));

  }
  seekto(event,idx){
    console.log(event)
    // return () => {
      this.seek(10);
    // };
  }
  seek(seconds) {
    return () => {
      this.refs.player.seek(seconds);
    };
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }
  getListOfPoses(results){
    return results.map((data, index) =>{
      return (
        <div key={index}>
          <ListItem button onClick={this.seekto.bind(this,index)}>
            <ListItemText primary={data['Pose']} secondary={new Date(data['Start'] * 1000).toISOString().substr(14, 5) + ' Duration:' +  (data['End'] - data['Start']) + ' seconds' } />
          </ListItem>
          <Divider />
          </div>
        )
       })
  }

  render() {

    return (
      <div>
        <Header title={"Results: " } />


        {this.state.results ?
        <div>
        <div className='main-container'>
        <div className='fixer-container'>
              <Player
                ref="player"
                height={500}
                width={500}
                fluid={false}
                className={"videoholder"}
              >
                <source src={this.state.videosrc} />
                <BigPlayButton position="center" />
              </Player>
        </div>
        </div>
          <List component="nav" className='listclass'>
         
            {this.getListOfPoses(this.state.results)}
          </List> 
          </div>
          : <p> Loading Results...</p>
        }
      </div>
    )
  }
}

Results.propTypes = {
  match: PropTypes.object,
};
