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
        <img src="/src/images/picture.jfif" alt="Picture of me"/>
      </div>
    </div>
  );
}
