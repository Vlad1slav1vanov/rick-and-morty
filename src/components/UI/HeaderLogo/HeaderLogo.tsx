import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Link } from "react-router-dom";

const HeaderLogo: FC = () => {
  return (
    <div className='header-logo__wrapper active-element'>
      <Link to='/'>
        <img src={require('../../../images/header-logo.png')} width='50' height='50' alt='Logo'/>
      </Link>
    </div>
  )
}

export default observer(HeaderLogo);