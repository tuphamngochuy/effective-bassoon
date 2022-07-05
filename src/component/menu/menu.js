import React from "react";
import './menu.css';

const dish = [
  'https://i.imgur.com/1Gyhquq.png',
  'https://i.imgur.com/avCiJMu.png',
  'https://i.imgur.com/sMY43gT.png',
  'https://i.imgur.com/JWyB4aa.png',
  'https://i.imgur.com/XLYE6Xl.png',
  'https://i.imgur.com/PYXEs4w.png',
  'https://i.imgur.com/wKGUucA.png',
  'https://i.imgur.com/YiDpppX.png',
]
const text = [
  'name1',
  'name2',
  'name3',
  'name4',
  'name5',
  'name6',
  'name7',
  'name8',
]
export function Menu() {
  return (
    <div className="menuStation">
      <div><h2>Menu</h2></div>
      <div id="menuContainter">
        {dish.map((d, i) => {
          return (
          <div className="menuCard">
            <div className="menuImg"><img alt='' src={d}/></div>
            <div className="menuText">
              {text[i]}
            </div>
          </div>)
        })}
      </div>
      <div className='pointTo' id='contact'></div>
    </div>
  )
}