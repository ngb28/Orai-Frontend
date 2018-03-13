import React from 'react';
import { Header } from '../Header/header';
import './Results.css';
import { Player } from 'video-react';
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
// import ImageIcon from 'material-ui-icons/Image';
import Power from 'material-ui-icons/Power';
// import BeachAccessIcon from 'material-ui-icons/BeachAccess';


export class Results extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      videosrc: '',
      results: null
    };

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
      this.seek = this.seek.bind(this);
    })

  }
  seekto(event,idx){
    console.log(event)
    return () => {
      this.refs.player.seek(10);
    };
  }
  seek(seconds) {
    
  }
  getListOfPoses(results){
    return results.map((data, index) =>{
      return (
        <div key={index}>
          <ListItem button onClick={this.seekto.bind(this,index)}>
            <ListItemText primary={data['Pose']} secondary={'Timestamp: ' + data['Start'] + ' seconds' } />
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
              <Player
                ref="player"
                height={500}
                width={500}
                fluid={false}
                style={{'background-color':'transparent'}}
                className={"videoholder"}
              >
                <source src={this.state.videosrc} />
              </Player>

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
