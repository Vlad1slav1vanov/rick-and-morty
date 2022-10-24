import React, { useState } from 'react';

const MainHeader = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <header className='main-header'>
      <img src='./images/header-logo.png' width='50' height='50' alt=''/>
      <nav className={`main-header__main-navigation ${menuState ? 'open' : ''}`}>
        <button>Characters</button>
        <button>Locations</button>
        <button>Episodes</button>
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