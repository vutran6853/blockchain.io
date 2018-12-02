import React, { Component } from 'react';
import Route from './route';
import { HashRouter } from 'react-router-dom';
import NavBar from './components/navbar/navBar';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar/>
            { Route }
        </div>
      </HashRouter>
    );
  }
}

export default App;
