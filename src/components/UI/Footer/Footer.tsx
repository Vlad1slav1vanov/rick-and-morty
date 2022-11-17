import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import Socials from "../Socials/Socials";

const Footer: FC = () => {
  return (
    <footer className='main-footer'>
      <p className='main-footer__description'>let's get schwifty!?</p>
      <Socials />
    </footer>
  )
}

export default observer(Footer);