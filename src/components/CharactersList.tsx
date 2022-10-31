import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {observer} from 'mobx-react-lite'
import characters from '../store/characters';
import { statusCheck } from '../utils/utils';
import { useInView } from 'react-intersection-observer';

const CharactersList: FC = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      characters.getCharacters()
      characters.incrementCharactersPage()
    }
  }, [inView])
 
  return (
    <ul className='characters__list'>
      {characters.charactersList.map(character => 
        <li 
        onClick={() => navigate('/characters/' + character.id)}
        key={character.id} 
        className='character-card active-element'
        >
          <img 
          className='character-card__image' 
          src={character.image} 
          style={{borderColor: `${statusCheck(character.status)}`}} 
          alt={character.name} 
          width='70%'
          />
          <h2 
          className='character-card__name'>
            {character.name}
          </h2>
          <p 
          className='character-card__species'>
            {character.species}
          </p>
          <p className='character-card__status-wrapper'>
            <span>Status:</span>
            <span style={{color: `${statusCheck(character.status)}`}}>{character.status}</span>
          </p>
        </li>
      )}
      <div ref={ref}>{inView}</div>
    </ul>
  )
}

export default observer(CharactersList);