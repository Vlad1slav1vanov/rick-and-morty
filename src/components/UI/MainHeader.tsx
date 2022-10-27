import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <header className='main-header'>
      <img src={require('../../images/header-logo.png')} width='50' height='50' alt='Logo'/>
      <nav className={`main-header__main-navigation ${menuState ? 'open' : ''}`}>
        <Link className='main-header__link' to='/characters'>Characters</Link>
        <Link className='main-header__link' to='/locations'>Locations</Link>
        <Link className='main-header__link' to='/episodes'>Episodes</Link>
      </nav>
      <div className={`${menuState ? 'open' : ''}`} 
           onClick={() => setMenuState(prev => !prev)} 
           id="menu-toggle">
        <div id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="cross">
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default MainHeader;