import React, { Component } from 'react';
import {HashRouter,Switch, Route} from 'react-router-dom';
import Login from './components/login';
import Search from './components/search';
import Library from './components/library'

class App extends Component {
  render() {
    return (
      <div className="App">
            <HashRouter>
  <Switch>
  
  <Route exact path ='/' component={Login}/>
  <Route path='/search' component={ Search} />
  <Route path='/library' component={ Library} />
  </Switch>
</HashRouter>
      </div>
    );
  }
}

export default App;
