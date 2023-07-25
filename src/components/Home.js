import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

import animation from '../animation.css'

export default class Home extends Component {
  render() {
    let resumeData = this.props.resumeData;

    const iframeStyle = {
      zIndex: -1,
      position: 'absolute',
      top: '10%',
      width: '100%',
      animation: 'floatAnimation 3s infinite'
    };

    const homepageBox = {
      zIndex: 2,
      position: 'absolute',
      top: '55%',
      left: '1%',
      width: '350px',
      height:'310px',
      textAlign: 'left',
      backgroundColor: 'black',
      color:'white',
      
      
    };

    const homepageBoxH2 = {
      marginTop:'50px',
      fontSize:'24px',
      marginLeft:'20px',
      lineHeight:'1.5',
      width:'300px'
    };

    const homepageBoxP = {
      fontSize:'16px',
      marginLeft:'20px', 
      lineHeight:'1.6',
      width:'300px'
    };

    const homepageBoxButton = {
      marginLeft:'20px',
      width:'300px'
    };


    const bannerText ={
      zIndex: -2,
      position: 'absolute',
      top: '10%',
      left: '5%',
      textAlign: 'center',
      color: 'black',
      letterSpacing: '55px',
      fontSize: '64px',
      lineHeight: '2.6',
      '@media only screen and (max-width: 1440px)': {
        fontSize: '56px',
      },
      '@media only screen and (max-width: 1024px)': {
        backgroundColor: 'red',
        fontSize: '24px',
      },
    }

    const bannerTextName ={
      zIndex: 2,
      position: 'absolute',
      top: '60%',
      left: '30%',
      
      color: 'white',
      
      fontSize: '96px',
      textShadow: `
      -1px -1px 0 black,
       1px -1px 0 black,
      -1px 1px 0 black,
       1px 1px 0 black`,

    }

    const spanText ={
      color: 'white',
      textShadow: `
      -1px -1px 0 black,
       1px -1px 0 black,
      -1px 1px 0 black,
       1px 1px 0 black`,

    }

    return (
      <React.Fragment>

          <div style={iframeStyle}>
            <iframe src="https://app.vectary.com/p/0QIOv3TQQwt0Zd3xry96Z4" width="100%" height="650"></iframe>
          </div>

          <div id="page">
            <div><Header resumeData={resumeData}/></div>
            <div style={homepageBox}>
              <h2 style={homepageBoxH2}>
                Welcome to 
                Mitchell library's collection
              </h2>
              <p style={homepageBoxP}>
                Find out more about Alexander "Greek" Thomson's works 
                and his contribution to glasgow.
              </p>
              <button style={homepageBoxButton}>
                Find Out More
              </button>
          </div>
          <p style={bannerText}>
            VISIONARY
            <span style={spanText}>"GREEK"</span><br/>
            ARCHITECT
          
            
          </p>

          <p style={bannerTextName}>
            ALEXANDER THOMSON
          </p>
            

              {/* <div><Header resumeData={resumeData}/></div>
              <div className="row banner">
                <div className="banner-text">
                  <h1 className="responsive-headline" style={{fontSize:'40px',textAlign: 'center',marginTop: '10%'}}>{resumeData.name}</h1>
                  <h3 style={{  fontFamily: 'sans-serif ' ,textAlign: 'center',marginTop: '30%'}}>{resumeData.roleDescription}</h3>
                  <hr />
                  <ul className="social">
                    {
                      resumeData.socialLinks && resumeData.socialLinks.map(item => {
                        return (
                          <li key={item.name}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
              </p>

              <div><Footer resumeData={resumeData}/></div> */}

          </div>

      </React.Fragment>
    );
  }
}