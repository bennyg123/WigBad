import React, {useState} from 'react';
import '../styles/NavBar.css';

function NavBar() {

  const [showModal, setShowModal] = useState(false);

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
  ));

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="navbar">
      <div className="homeLogo">
        <div className="appIcon">
          <img src="https://safoodexpapp.blob.core.windows.net/images/WIGBAD_Logo.png" />
        </div>
        <div className="homeTitle">
          <div className="homeName">
            When's It Go <u>Bad</u>?
          </div>
          <div className="homeBlurb">
            a database of food expiration times
          </div>
        </div>
      </div>
      <ul className="navLinks">          
          {navLinks}
          <li onClick={openModal}>
            <a>
              Coming Features
            </a>
          </li>
      </ul>
      <Modal show={showModal} handleClose={closeModal}>
        <h1>List of Upcoming Features</h1>
        <ul style={{}}>
          {listOfComingFeatures.map(feature => (
            <li>{feature}</li>
          ))}
        </ul>
      </Modal>
    </div>
  );
}

const listOfComingFeatures = [
  "[LOGIC] Delete & Collapse Buttons on Food Cards",
  "[LOGIC] Search Bar, with auto-fill and suggestions [fuzzysort]",
  "[LOGIC] Redux & TypeScript",
  " == ",
  "[BACK END] Connection with Fake API Server",
  "[BACK END] Actual data",
  " == ",
  "[UI] Icons for each food item",
  "[UI] Some mad styling. Maybe styled components, maybe scss.",
  "[UI] Animations out the wa-zoo. Lots of fade-ins and pan-ins",
  "[UI] Responsive Styling (Desktop and Mobile)",
  " == ",
  "[MISC] Add custom domain to pauldang.dev",
  "[MISC] Modify app / tab logo and text",
  "[MISC] Implement unit testing with Jest / Enzyme"
  
]

const Modal = (
  { 
    handleClose, 
    show, 
    children 
  }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName} onClick={handleClose}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  };

export default NavBar;
