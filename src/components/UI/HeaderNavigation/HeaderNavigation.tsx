import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import HeaderNavigationLink from "../HeaderNavigationLink/HeaderNavigationLink";

interface HeaderNavigationProps {
  menuState: boolean;
}

const HeaderNavigation: FC<HeaderNavigationProps> = ({menuState}) => {
  return (
    <nav className={`header-navigation ${menuState ? 'open' : ''}`}>
      <HeaderNavigationLink pageName="Characters" adress="/characters" />
      <HeaderNavigationLink pageName="Episodes" adress="/episodes"/>
      <HeaderNavigationLink pageName="Locations" adress="/locations"/>
    </nav>
  )
}

export default observer(HeaderNavigation);