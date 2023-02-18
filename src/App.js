import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
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
        <img src="https://github.com/LoganBernthall/PortfolioProj/blob/1fb1e3f06bd697c0c7a867f048cc0a5b0fd61b41/src/images/picture.jfif" alt="Picture of me"/>
      </div>
    </div>
  );
}
