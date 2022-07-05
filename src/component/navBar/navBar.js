import React from "react";


import './navBar.css';


export function NavBar(prop) {
  return (<div id="navBar" style={{opacity: `${prop.opacity}`}}>
    <div id="navBarLogo">
      <img alt="" src="https://i.imgur.com/1cimS3R.png"/>
    </div>
    <div id="navBarContent">
      <div className="navContentTab">
        <a href="#about"><h4>About</h4></a>
      </div>
      <div className="navContentTab">
        <a href="#menu"><h4>Menu</h4></a>
      </div>
      <div className="navContentTab">
      <a href="#contact"><h4>Contact</h4></a>
      </div>
    </div>
  </div>)
}