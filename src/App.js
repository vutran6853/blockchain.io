import React, { Component } from 'react';
import Route from './route';
import { HashRouter } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';

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
