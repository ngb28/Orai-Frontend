import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from './Header/header';
import Button from 'material-ui/Button';
// import RaisedButton from 'material-ui/RaisedButton';
// import RaisedButton from 'material-ui/RaisedButton';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentWillMount() {
    

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
            <Button variant="raised" >
                 Upload
          </Button>

            </li>
          </ul>
        </div>
      </div>
    );
  }
}
