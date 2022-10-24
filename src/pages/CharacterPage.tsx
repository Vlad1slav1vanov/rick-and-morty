import React from 'react';
import MainHeader from '../components/UI/MainHeader';

const CharacterPage = () => {
  return (
    <>
    <MainHeader />
    <main className='main-wrapper character-page'>
      <button className='character-page__button-back'></button>
      <img className='character-page__image' src='' alt=''/>
      <h1 className='character-page__name'>Rick Sanchez</h1>
      <section className='character-page__informations informations'>
        <h2 className='informations__title'>informations</h2>
        <ul className='informations__list'>
          <li className='informations__item'>
            <span className='informations__name'>Gender</span>
            <span></span>
          </li>
          <li className='informations__item'>
            <span className='informations__name'>Status</span>
            <span></span>
          </li>
          <li className='informations__item'>
            <span className='informations__name'>Specie</span>
            <span></span>
          </li>
          <li className='informations__item'>
            <span className='informations__name'>Origin</span>
            <span></span>
          </li>
          <li className='informations__item'>
            <span className='informations__name'>Type</span>
            <span></span>
          </li>
          <li className='informations__item'>
            <span className='informations__name'>Location</span>
            <span></span>
          </li>
        </ul>
      </section>

      <section className='character-page__episodes episodes'>
        <h2 className='episodes__title'>Episodes</h2>
        <ul className='episodes__list'>
          <li className='episodes__item'>
            <span className='episodes__code'></span>
            <span className='episodes__name'></span>
            <span className='episodes__date'></span>
          </li>
        </ul>
      </section>
    </main>
    <footer className='main-footer'></footer>
    </>
  )
}

export default CharacterPage;