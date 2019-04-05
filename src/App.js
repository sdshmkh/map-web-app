import React, { Component } from 'react';
import Display from './Components/Display';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to Maps
        </header>
        <div className="App-container">
          <div className='spacing-display'>
            <Display />
          </div>
          <div id='map'></div>
        </div>
      </div>
    );
  }
}

export default App;
