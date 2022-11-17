import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {observer} from 'mobx-react-lite'
import characters from '../../../store/CharactersListStore/CharactersListStore';
import { statusCheck } from '../../../utils/utils';
import { useInView } from 'react-intersection-observer';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import { runInAction } from 'mobx';
import Loading from '../../UI/Loading/Loading';

const CharactersList: FC = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      characters.incrementCharactersPage()
      characters.getCharacters()
    }
  }, [inView])

  // сброс на кнопку ОК при ошибке
  const clickEvent = () => {
    runInAction(() => {
      characters.name = '';
      characters.requestName = '';
      characters.gender = '';
      characters.requestGender = '';
      characters.status = '';
      characters.requestStatus = '';
      characters.resetCharacters()
    })
  }

  return (
    <ul className='cards-list-wrapper'>
      { 
      characters.errorMessage
      ?
      <ErrorMessage message={characters.errorMessage} clickEvent={clickEvent}/>
      :
      characters.charactersList.map(character => 
        <li 
          onClick={() => navigate('/characters/' + character.id)}
          key={character.id} 
          className='card-wrapper active-element'
        >
            <img 
            src={character.image} 
            style={{borderColor: `${statusCheck(character.status)}`}} 
            alt={character.name} 
            />
            <h2>
              {character.name}
            </h2>
            <div>
              <p>
                {character.species}
              </p>
              <p>
                <span>Status:</span>
                <span style={{color: `${statusCheck(character.status)}`}}>{character.status}</span>
              </p>
            </div>
          </li>
        )
      }
      <div className={`viewer${characters.viewerStatus}`} ref={ref}>{inView}</div>     
    </ul>
  )
}

export default observer(CharactersList);