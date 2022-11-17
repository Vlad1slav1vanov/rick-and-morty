import { observer } from 'mobx-react-lite';
import { FC, useState } from 'react';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import Loading from '../Loading/Loading';
import MenuToggle from '../MenuToggle/MenuToggle';

const Header: FC = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <header className='main-header'>
      <HeaderLogo />
      <HeaderNavigation menuState={menuState} />
      <MenuToggle 
        menuState={menuState} 
        onClick={() => setMenuState(prev => !prev)}
      />
    </header>
  )
}

export default observer(Header);