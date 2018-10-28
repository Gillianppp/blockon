import React, { Component } from 'react';
// import {render} from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/Home/Home';
import AuthContainer from './containers/Auth/Auth';
import DashboardContainer from './containers/Dashboard/Dashboard';
import NotFound from './containers/NotFound/NotFound';
//import HeaderBar from './components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';

library.add(faFingerprint);

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/auth/:usertype" exact component={AuthContainer} />
            <Route path="/dashboard/:usertype" exact component={DashboardContainer} />
            <Route path="/"exact component={HomeContainer} />
            <Route path="/home" exact component={HomeContainer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
