import './App.css';
import { useState } from 'react';
import { NavBar } from './component/navBar/navBar';
import About from './component/about/about';
import { Menu } from './component/menu/menu';
import { Contact } from './component/contact/contact';

function App() {
  const [hide, setHide] = useState(1);

  const onScrollFunc = () => {
    window.addEventListener('scroll', (e) => {
      if (
        window.scrollY < 10 || 
        (window.scrollY > 600 && window.scrollY < 603) || 
        (window.scrollY > 1155 && window.scrollY < 1160) ||
        (window.scrollY > 1704 && window.scrollY < 1707)) {
        setHide(1);
      } else {
        setHide(0.6);
      }
    });
  }

  return (
    <div className="App" onScroll={onScrollFunc()}>
      <div style={{position: 'relative'}}>
        <img alt='' src='https://i.imgur.com/ln68fYE.jpg'/>
        <div className='pointTo' id='about'></div>
      </div>
      <NavBar opacity = {hide}/>
      <About />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
