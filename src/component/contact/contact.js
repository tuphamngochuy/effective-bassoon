import React from "react";
import './contact.css';

export function Contact() {
  return (
    <div style={{ 'background-color': 'rgb(51, 0, 23)', 'padding':'20px 0px'}}>
      <div style ={{'color': 'aliceBlue'}}><h2>Contact</h2></div>
      <h3 style ={{'color': 'aliceBlue'}}>Sadhu - Vegetarian buffet restaurant in Hanoi</h3>
      <div id="contactContainer">
        <div className="contactItem">
          <p>Udie Complex. N04 Hoang Thuy Dao street</p>
        </div>
        <div className="contactItem">
          <p>Udie Complex. N04 Hoang Thuy Dao street</p>
        </div>
        <div className="contactItem">
          <p><a style ={{'color': 'aliceBlue'}} href="https://www.facebook.com/">Facebook</a></p>
        </div>
        <div className="contactItem">
          <p>Udie Complex. N04 Hoang Thuy Dao street</p>
        </div>
        <div className="contactItem">
          <p>Udie Complex. N04 Hoang Thuy Dao street</p>
        </div>
        <div className="contactItem">
          <p><a style ={{'color': 'aliceBlue'}} href="https://www.instagram.com/">Instagram</a></p>
        </div>
      </div>
    </div>
  );
}