import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-light navbar-toggleable-md navbar-toggleable-sm justify-content-between">
          <div className="container">
            <a className="navbar-brand h1">Huong Nguyen</a>
            <div className="collapse navbar-collapse navbar-right flex-lg-row-reverse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Journal">Journal</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Work</Link>
              </li>
            </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;