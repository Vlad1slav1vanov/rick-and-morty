import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import SingleEpisodeStore from "../../../store/SingleEpisodeStore/SingleEpisodeStore";
import SingleLocationStore from "../../../store/SingleLocationStore/SingleLocationStore";
import { IResult } from "../../../types/characters";
import { statusCheck } from "../../../utils/utils";

const SingleLocationCharactersList: FC = () => {
  const navigate = useNavigate()
  const clickNavigate = (character: IResult) => {
    navigate(`/characters/${character.id}`)
  }
  return (
    <section className='single-episode-characters'>
      <h2 className='single-episode-characters__title'>Residents:</h2>
      <ul className='single-episode-characters__list'>
        {SingleLocationStore.singleLocationCharacters.map(character => 
          <li key={character.id} 
            className='single-episode-characters__item episode-character active-element'
            onClick={(evt: React.MouseEvent<HTMLLIElement>) => clickNavigate(character)}
          >
            <img className='episode-character__image' style={{borderColor: `${statusCheck(character.status)}`}}  src={character.image} alt={character.name} />
            <h3 className='episode-character__name'>{character.name}</h3>
          </li>
          )}
      </ul>
    </section>
)}

export default observer(SingleLocationCharactersList);