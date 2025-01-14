import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {

    


    return (
      <React.Fragment>
        {/* <header id="home"> */}
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><Link to="/">Home</Link></li>
              <li><Link to="/about">Our Collection</Link></li>
              <li><Link to="/resume">Thomson</Link></li>
              <li><Link to="/NewsLetter">NewsLetter</Link></li>
              {/* <li><Link to="/portfolio">Works</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li> */}
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>
        {/* </header> */}
      </React.Fragment>
    );
  }
}
