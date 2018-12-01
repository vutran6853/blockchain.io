import React, { Component } from 'react';
import Router from './route';
import { HashRouter } from 'react-router-dom';
import NavBar from './components/navbar/navBar';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar/>
            { Router }
        </div>
      </HashRouter>
    );
  }
}

export default App;
