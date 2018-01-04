import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// component
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homepage';
import Journal from './components/pages/journal';

// includes
import './css/main.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/Journal' component={Journal} />
        </div>
      </Router>
    );
  }
}

export default App;
