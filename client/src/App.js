import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar></Navbar>
          <Landing></Landing>
        </div>
      </Router>
    );
  }
}

export default App;
