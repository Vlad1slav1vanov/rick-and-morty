import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import singleCharacter from '../../../store/singleCharacterStore/singleCharacterStore';

const CharacterEpisodesList:  FC = () => {
  const navigate = useNavigate();
  return (
    <section className='character-episodes'>
      <h2 className='character-episodes__main-title'>Episodes</h2>
      <ul className='character-episodes__list'>
      {singleCharacter.singleCharacterEpisodes.map( episode =>
        <li className='character-episodes__item active-element' key={episode.id} onClick={(evt: React.MouseEvent<HTMLLIElement>) => navigate(`/episodes/${episode.id}`)}>
          <h3 className='character-episodes__item-title'>{episode.episode}</h3>
          <p className='character-episodes__item-name'>{episode.name}</p>
          <p className='character-episodes__item-date'>{episode.air_date}</p>
        </li>
      )}
      </ul>
    </section>
  )
}

export default observer(CharacterEpisodesList);