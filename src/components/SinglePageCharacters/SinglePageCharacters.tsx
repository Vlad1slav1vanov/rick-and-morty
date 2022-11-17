import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IResult } from "../../types/characters";
import { statusCheck } from "../../utils/utils";

interface SinglePageCharactersProps {
  characters: IResult[];
  title: string;
}

const SinglePageCharacters: FC<SinglePageCharactersProps> = ({characters, title}) => {
  const navigate = useNavigate()
  const clickNavigate = (character: IResult) => {
    navigate(`/characters/${character.id}`)
  }
  
  return (
    <section className='single-page-characters'>
      <h2 className='single-page-characters__title'>{title}</h2>
      <ul className='single-page-characters__list'>
        {characters.map(character => 
          <li key={character.id} 
            className='single-page-characters__item active-element'
            onClick={(evt: React.MouseEvent<HTMLLIElement>) => clickNavigate(character)}
          >
            <img className='single-page-characters__image' style={{borderColor: `${statusCheck(character.status)}`}}  src={character.image} alt={character.name} />
            <h3 className='single-page-characters__name'>{character.name}</h3>
          </li>
        )}
    </ul>
  </section>
  )
}

export default observer(SinglePageCharacters);
