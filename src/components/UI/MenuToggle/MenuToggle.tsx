import { observer } from "mobx-react-lite";
import React, { FC } from "react";

interface MenuToggleProps {
  menuState: boolean;
  onClick: () => void;
}

const MenuToggle: FC<MenuToggleProps> = ({menuState, onClick}) => {
  return (
    <div
    onClick={onClick}
    className={`${menuState ? 'open' : ''}`}  
    id="menu-toggle"
    >
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
  )
}

export default observer(MenuToggle);