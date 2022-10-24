import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import MainHeader from '../components/UI/MainHeader';
import CharactersList from '../components/CharactersList';
import { useInView } from 'react-intersection-observer';
import { ICharacterCard } from '../types/types';

const HomePage: FC = () => {
  // состояние карточек персонажей
  const [characters, setCharacters] = useState<ICharacterCard[]>([]);
  // отслеживание последнего элемента
  const  { ref , inView }  =  useInView();
  // состояние загруженных страниц с персонажами
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (inView) {
      getCharacters()
    }
  }, [inView])

    // функция подгрузки персонажей и изменения номера страницы

  async function getCharacters() {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      setCharacters([...characters, ...response.data.results]);
      setPage(prev => prev + 1)
    }
    catch (err) {
      alert(err)
    }
  }

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
        <CharactersList characters={characters}/>
        <div ref={ref} style={{opacity: 0, height: '20px', width: '100%'}}>{inView}</div>
      </section>
      
    </main>
    <footer className='main-footer'>

    </footer>
    </>
  )
}

export default HomePage;
