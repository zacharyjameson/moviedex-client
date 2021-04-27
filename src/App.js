import React, { Component } from 'react';
import { Route } from "react-router-dom";
import "./App.css";
import CreateAccount from './Accounts/CreateAccount';
import HomePage from "./HomePage/HomePage";
import SavedList from './SavedList/SavedList';
import Search from './SearchPage/SearchPage';
import LogInOut from './Accounts/LogInOut';

class App extends Component {
  state = {  }
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={Search} />
        <Route path="/savedmovies" component={SavedList} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/login" component={LogInOut} />
      </>
    )
  }

  render() { 
    return ( 
      <div className="App_main">
      <main className="App_main">{this.renderMainRoutes()}</main>
      </div>
     );
  }
}
 
export default App;
