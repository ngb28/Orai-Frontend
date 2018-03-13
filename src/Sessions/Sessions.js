import React from 'react';
import {Header} from '../Header/header';
import './Sessions.css';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import  SessionManager from '../managers/session'
import  {getCurrentUser} from '../Login/cookie.js'
import {Link} from 'react-router-dom';

const data = [{
  name: 'Tanner Linsley',
  age: 26,
  friend: {
    name: 'Jason Maurer',
    age: 23,
  }
}]

const columns = [{
  Header: 'Thumbnail',
  accessor: 'Thumbnail' // String-based value accessors!
}, {
  Header: 'Title',
  accessor: 'Title',
  // Cell: props => <Link to={'/results/'+'sid'}>{props.value}</Link> // Custom cell components!
}, {
  // id: 'Date', // Required because our accessor is not a string
  Header: 'Date',
  accessor: 'DateCreated',
  Cell: props => <div> {new Date(props.value).toLocaleString()}</div> // Custom cell components!
  // accessor: d => d.friend.name // Custom value accessors!
}, {
  Header: 'Duration',
  accessor: 'Duration',
  // Header: props => <span>Friend Age</span>, // Custom header components!
  // accessor: 'friend.age'
}]



export class Sessions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions:[],
    }
  }

  componentWillMount() {
      // console.log()
      var jwt = getCurrentUser();
      // console.log();
      SessionManager.fetchUserSessions(jwt['uid']).then((response)=>{
        this.setState({
          sessions:response,
        });
        console.log(response);
      })
  }

  onRowClick(e, t, rowInfo) {
    var sid = rowInfo.original.SessionID
    const results = `/results/`+sid;
    this.props.history.push(results);
  }
  
  render() {
    return(
      <div>
        <Header title={"Sessions"}/>
        <div>
        
        <ReactTable
          data={this.state.sessions}
          columns={columns}
          getTrProps={(state, rowInfo) => ({
            onClick: (e, t) => { this.onRowClick(e, t, rowInfo); },
            style: {
              cursor: 'pointer',
            },
          })}
         />
      
        </div>
      </div>
    );
  }
}
export default Sessions