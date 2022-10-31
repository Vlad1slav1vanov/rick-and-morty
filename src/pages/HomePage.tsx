import { FC } from 'react';
import MainHeader from '../components/UI/MainHeader';
import {observer} from 'mobx-react-lite';
import CharactersList from '../components/CharactersList';
import CharacterFilters from '../components/CharacterFilters';

const HomePage: FC = () => {

  
  return (
    <div className='home-page'>
      <MainHeader />
      <main className='main-wrapper'>
        <section className='characters'>
          <h1 className='visually-hidden'>Rick and Morty Characters</h1>
          <picture>
            <source media='(min-width: 768px)' srcSet='./images/main-title-desktop.png' width='600' height='200'/>
            <img className='main-logotype' src='./images/main-title.png' alt='' width='312' height='104'/>
          </picture>
          <CharacterFilters />
          <CharactersList />
        </section> 
      </main>
      <footer className='main-footer'>

      </footer>
    </div>
  )
}

export default observer(HomePage);