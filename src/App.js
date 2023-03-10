import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <ul>
        <li>
          <a class="active" href="#home">
            Logan Elliott Bernthall
          </a>
        </li>
        <li>
          <a href="./src/Education.js" class="btnRight">
            Education
          </a>
        </li>
        <li>
          <a href="#contact" class="btnRight">
            Work Experience
          </a>
        </li>
        <li>
          <a href="#about" class="btnRight">
            Contact
          </a>
        </li>
      </ul>
      <div class="boxLeft">
        <img
          src="https://stackblitz.com/files/react-ewga1h/github/LoganBernthall/PortfolioProj/main/src/images/picture.jfif"
          alt="Picture of me"
          class="portfolioImage"
        />
        <div class="leftBoxInfo">
        <img
          src="https://stackblitz.com/files/react-ewga1h/github/LoganBernthall/PortfolioProj/main/src/images/pushpin-icon.png"
          alt="Location pin"
          class="locationPin"
        />
        <span class="locationText"> London, United Kindgom </span>
        <img src="https://stackblitz.com/files/react-ewga1h/github/LoganBernthall/PortfolioProj/main/src/images/book-literature-icon.png" class="bookIcon" alt="Book"/>
        <span class="bookText"> University Of West London</span>
        <img src="https://stackblitz.com/files/react-ewga1h/github/LoganBernthall/PortfolioProj/main/src/images/email-address-icon.png" class="emailIcon" alt="Email Icon" />
        <span class="emailText">21571598@student.uwl.ac.uk</span>
        </div>
      </div>
      <div class="boxRight">
      <span class="nameTitle"> Hi, I'm Logan! </span>
      <span class="nameBlurb"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span>
      </div>
      <div class="boxBlurb">
      <span class="blurbTitle"> In a nutshell... </span>
      
      <span class="nutshellBlurb"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. do eiusmod tempor incididunt ut labore et dolore magna aliqua. do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     </span>
     </div>
     <div class="quickLinksBox">
      <span class="linksTitle"> Quick Links </span>
      <a href="https://www.linkedin.com/in/logan-bernthall-1b65851b8"><img
          src="https://stackblitz.com/files/react-ewga1h/github/LoganBernthall/PortfolioProj/main/src/images/linkedin-square-icon.png"
          alt="LinkedIn Logo"
          class="LinkedInLogo"
        /></a>
              <a href="https://github.com/LoganBernthall"><img
          src="https://stackblitz.com/files/react-ewga1h/github/LoganBernthall/PortfolioProj/main/src/images/github-icon.png"
          alt="GithubLogo"
          class="GithubLogo"
        /></a>
        <a href="mailto:21571598@student.uwl.ac.uk"><img
          src="https://stackblitz.com/files/react-ewga1h/github/LoganBernthall/PortfolioProj/main/src/images/email-address-icon.png"
          alt="EmailLogo"
          class="EmailToLogo"
        /></a>
     </div>
    
    </div>
  );
}
