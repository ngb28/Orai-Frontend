import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from './home';
import {Sessions} from './Sessions/Sessions';
import {Record} from './Record/Record';
import './index.css';


class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/Sessions'} component={Sessions} />
          <Route exact path={'/Record'} component={Record} />
        </Switch>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
