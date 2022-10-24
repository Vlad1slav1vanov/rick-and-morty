import React, { FC } from 'react';
import { ICharacterCard } from '../types/types';

interface CharactersListProps {
  characters: ICharacterCard[];
}

const statusCheck = (status: string) => {
  if (status === 'Alive') {
    return 'green';
  }

  if (status === 'Dead') {
    return 'red';
  }

  return 'grey'
}

const CharactersList: FC<CharactersListProps> = ({characters}) => {
 
  return (
    <ul className='characters__list'>
      {characters.map(character => 
        <li key={character.id} className='character-card'>
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
    </ul>
  )
}

export default CharactersList;