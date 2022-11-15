import { observer } from "mobx-react-lite";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface HeaderNavigationLinkProps {
  adress: string;
  pageName: string;
}

const HeaderNavigationLink: FC<HeaderNavigationLinkProps> = ({adress, pageName}) => {
  return (
    <NavLink 
      className='header-navigation-link'
      to={adress}
    >
      {pageName}
    </NavLink>
  )
}

export default observer(HeaderNavigationLink);