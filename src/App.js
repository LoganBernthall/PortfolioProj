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
          <a href="#news" class="btnRight">
            News
          </a>
        </li>
        <li>
          <a href="#contact" class="btnRight">
            Contact
          </a>
        </li>
        <li>
          <a href="#about" class="btnRight">
            About
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
    </div>
  );
}
