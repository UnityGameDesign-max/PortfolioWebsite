import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Socials.css"
import { Link } from 'react-router-dom';

function Socials() {
  return (
    <div className="socials">
        <svg width="2" className="socials__stroke" height="50" viewBox="0 0 2 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" x2="1" y2="85" stroke="#794AFF" stroke-width="3"/>
        </svg>
        <Link to="/https:www.twitter.com/"><TwitterIcon className="socials__links" /></Link>
        <Link to="/https://www.linkedin.com/in/tumelo-mahlangu-03651b1bb/"><LinkedInIcon className="socials__links" /></Link>
        <Link to="/https://www.github.com/UnityGameDesign-max/"><GitHubIcon className="socials__links" /></Link>
        <svg width="2" className="socials__stroke" height="50" viewBox="0 0 2 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" x2="1" y2="85" stroke="#794AFF" stroke-width="3"/>
        </svg>
    </div>
  );
}

export default Socials;
