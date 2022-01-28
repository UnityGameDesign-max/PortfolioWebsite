import React from 'react';
import Navigation from '../components/Navigation';
import Socials from '../components/Socials';
import "../styles/Home.css";

function Home() {
  return (
      <div className="home">
        <Navigation />
        <Socials />
        <div className="home__hero">
            <div className="home__hero-details">
                <pre className="home__hero-section-tumi">&lt;tumelo&gt;</pre>
                <h1 className="home__hero-section-text">I Create Applications for the Web</h1>
                <p className="home__hero-section-slogan">Creative frontend developer.  Good Problem solver.</p>
                <div className="home__hero-button-wrapper">
                    <button className="home__hero-button">See Projects</button>
                </div>
                <pre className="home__hero-section-tumi">&lt;/tumelo&gt;</pre>
            </div>
            <div className="home__hero-section-scroll">
                <p className="scroll-text">Scrolldown</p>
                <svg className="scroll-arrow" width="23" height="63" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 22.7071C7.68342 23.0976 8.31658 23.0976 8.70711 22.7071L15.0711 16.3431C15.4616 15.9526 15.4616 15.3195 15.0711 14.9289C14.6805 14.5384 14.0474 14.5384 13.6569 14.9289L8 20.5858L2.34315 14.9289C1.95262 14.5384 1.31946 14.5384 0.928933 14.9289C0.538408 15.3195 0.538408 15.9526 0.928933 16.3431L7.29289 22.7071ZM7 0L7 22H9L9 0L7 0Z" fill="#6615EB" fill-opacity="0.79"/>
                </svg>
            </div>
        </div>
      </div>
    );
}

export default Home;
