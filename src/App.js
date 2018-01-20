import React, { Component } from 'react';
import {HashRouter,Switch, Route} from 'react-router-dom';
import Login from './components/login';
import Search from './components/search';
import Library from './components/library';
import SingleView from './components/singleView'

class App extends Component {
  render() {
    return (
      <div>
 <HashRouter>
   <Switch>
     <Route exact path ='/' component={Login}/>
     <Route path='/search' component={ Search} />
     <Route path='/library/:id' component={ SingleView} />
     <Route path='/library' component={ Library} />
  </Switch>
 </HashRouter>
      </div>
    );
  }
}

export default App;
