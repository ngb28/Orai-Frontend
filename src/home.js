import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from './Header/header';
import {postVideo} from './Utils/Orai-api';
import Button from 'material-ui/Button';
// import RaisedButton from 'material-ui/RaisedButton';
// import RaisedButton from 'material-ui/RaisedButton';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file:null
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  onFormSubmit(e){
    e.preventDefault()
    this.fileUpload(this.state.file).then((response) => {console.log(response);})
  }

  onChange(e) {
    this.setState({file: e.target.files[0]})
  }

  fileUpload(file) {
    //var stringVid = JSON.stringify(file);
    //console.log(file);
    let video = {
      title: 'testUp',
      data: file
    }
    return postVideo(video);
  }

  render() {
    return(
      <div>
        <Header title={"Home"} />
        <div className = "Up-Rec-Box">
          <p className='card-header'> Orai Nvrbl Feedback </p>
          <ul className="Upload-Record">
            <li><Link to='/Record'>
            <Button variant="raised" color={'secondary'}>
                 Record
           </Button>
            </Link></li>
            <li><p style={{color:'black'}}>Or</p></li>
            <li>
              <form onSubmit={this.onFormSubmit}>
                <input type="file" onChange={this.onChange} />
                <Button variant="raised" type="submit">Upload</Button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
