import { observer } from "mobx-react-lite";
import React from "react";
import characters from "../store/characters";

const CharacterEpisodesList = () => {
  return (
    <section className='character-episodes'>
      <h2 className='character-episodes__main-title'>Episodes</h2>
      <ul className='character-episodes__list'>
      {characters.singleCharacterEpisodes.map( episode =>
        <li className='character-episodes__item' key={episode.id}>
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