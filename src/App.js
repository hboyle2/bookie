import React, { Component } from 'react';
import {HashRouter,Switch, Route, Link} from 'react-router-dom';
import Login from './components/login';
import search from './components/search';
import Library from './components/library'

import Search from './components/search'
class App extends Component {
  render() {
    return (
      <div className="App">
            <HashRouter>
  <Switch>
  
  <Route exact path ='/' component={Login}/>
  <Route path='/search' component={ Search} />
  <Route path='/libary' component={ Library} />
  </Switch>
</HashRouter>
      </div>
    );
  }
}

export default App;
