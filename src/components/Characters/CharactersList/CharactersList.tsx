import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {observer} from 'mobx-react-lite'
import characters from '../../../store/CharactersListStore/CharactersListStore';
import { statusCheck } from '../../../utils/utils';
import { useInView } from 'react-intersection-observer';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';

const CharactersList: FC = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView();

  useEffect (() => {
    if (inView && characters.isLoading === false) {
        characters.incrementCharactersPage();
        characters.getCharacters();  
    }
  }, [inView])

  // сброс на кнопку ОК при ошибке
  const clickEvent = () => {
    characters.name = '';
    characters.requestName = '';
    characters.gender = '';
    characters.requestGender = '';
    characters.status = '';
    characters.requestStatus = '';
    characters.resetCharacters()
  }


  return (
    <ul className='characters-list'>
      {
      characters.errorMessage
      ?
      <ErrorMessage message={characters.errorMessage} clickEvent={clickEvent}/>
      :
      characters.charactersList.map(character => 
        <li 
          onClick={() => navigate('/characters/' + character.id)}
          key={character.id} 
          className='characters-list__item character-card active-element'
        >
            <img 
            className='character-card__image' 
            src={character.image} 
            style={{borderColor: `${statusCheck(character.status)}`}} 
            alt={character.name} 
            width='70%'
            />
            <h2 className='character-card__name'>
              {character.name}
            </h2>
            <div className='character-card__description-wrapper'>
              <p className='character-card__species'>
                {character.species}
              </p>
              <p className='character-card__status-wrapper'>
                <span>Status:</span>
                <span style={{color: `${statusCheck(character.status)}`}}>{character.status}</span>
              </p>
            </div>
          </li>
        )
      }
      <div className={`viewer ${characters.errorMessage ? 'viewer--not-active' : ''}`} ref={ref}>{inView}</div>     
    </ul>
  )
}

export default observer(CharactersList);