import React, { Component } from 'react';
// import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeContainer from './containers/Home/Home';
import AuthContainer from './containers/Auth/Auth';
import DashboardContainer from './containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route path="/auth" component={AuthContainer} />
            <Route path="/dashboard" component={DashboardContainer} />
            <Route path="/"exact component={HomeContainer} />
            <Route path="/home"exact component={HomeContainer} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
