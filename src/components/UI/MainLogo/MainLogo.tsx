import { observer } from "mobx-react-lite";
import React, { FC } from "react";

interface MainLogoProps {
  props: {
    url: {
      mobile: string;
      desktop: string;
    }
  
    size: {
      mobile: {
        width: number;
        height: number;
      }
  
      desktop: {
        width: number;
        height: number;
      }
    }
  }
}

const MainLogo: FC<MainLogoProps> = ({props}) => {
  return (
    <div className='main-logo'>
      <picture>
        <source media='(min-width: 768px)' srcSet={props.url.desktop} width={props.size.desktop.width} height={props.size.desktop.height}/>
        <img className='main-logotype' src={props.url.mobile} alt='main-logo' width={props.size.mobile.width} height={props.size.mobile.height}/>
      </picture>
    </div>
  )
}

export default observer(MainLogo);