import React, { Component } from 'react';
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import SavedList from './SavedList/SavedList';
import Search from './SearchPage/SearchPage';

class App extends Component {
  state = {  }
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={Search} />
        <Route path="/savedmovies" component={SavedList} />
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
