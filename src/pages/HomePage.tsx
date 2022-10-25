import React, { FC, useEffect } from 'react';
import MainHeader from '../components/UI/MainHeader';
import {observer} from 'mobx-react-lite';
import characters from '../store/characters';
import CharactersList from '../components/CharactersList';
import { useInView } from 'react-intersection-observer';


const HomePage: FC = () => {
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      characters.getCharacters()
    }
  }, [inView])
  return (
    <>
    <MainHeader />
    <main className='main-wrapper'>
      <section className='characters'>
        <h1 className='visually-hidden'>Rick and Morty Characters</h1>
        <picture>
          <source media='(min-width: 768px)' srcSet='./images/main-title-desktop.png' width='600' height='200'/>
          <img className='main-logotype' src='./images/main-title.png' alt='' width='312' height='104'/>
        </picture>
        <CharactersList />
        <div ref={ref}>{inView}</div>
      </section>
      
    </main>
    <footer className='main-footer'>

    </footer>
    </>
  )
}

export default observer(HomePage);