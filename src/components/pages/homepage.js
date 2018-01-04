import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div id="main-content" className="container">
        <div className="row galaxy-circle">
          <div className="star" id="star1"></div>
          <div className="star" id="star2"></div>
          <div className="star" id="star3"></div>
          <div className="star" id="star4"></div>
          <div className="star" id="star5"></div>
          <div className="star" id="star6"></div>
          <div className="star" id="star7"></div>
          <div className="star" id="star8"></div>
          <div className="star" id="star9"></div>
          <div className="star" id="star10"></div>
          <div className="star" id="star11"></div>
          <div className="star" id="star12"></div>
        </div>
      <div className="sun"></div>
      </div>
    );
  }
}

export default Homepage;