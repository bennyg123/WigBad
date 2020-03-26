import React from 'react';
import '../styles/NavBar.css';

function NavBar() {

  var navLinksData = [
      { "url": "https://google.com", "label": "Google" },
      { "url": "https://github.com/pauldangpaul", "label": "GitHub" },
      { "url": "https://www.youtube.com/channel/UCrh2pfiD5Du81vKBxr1Z8XQ", "label": "Youtube" },
      { "url": "https://www.youtube.com/watch?v=oHg5SJYRHA0", "label": "About" }
  ]

  var navLinks = navLinksData.map(link => (
      <li>
          <a href={link.url} target="_blank">
              {link.label}
          </a>
      </li>
  ))

  return (
    <div className="navbar">
      <header className="homeLogo">
          When's It Go <u>Bad</u>?
      </header>
      <ul className="navLinks">          
          {navLinks}
      </ul>
    </div>
  );
}

export default NavBar;
