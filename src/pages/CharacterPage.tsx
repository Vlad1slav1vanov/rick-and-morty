import React, { FC, useEffect } from "react";
import {observer} from 'mobx-react-lite'
import { useNavigate, useParams } from "react-router-dom";
import MainHeader from "../components/UI/MainHeader";
import characters from "../store/characters";
import CharacterEpisodesList from "../components/CharacterEpisodesList";
import CharacterInformationsList from "../components/CharacterInformationsList";
import { statusCheck } from "../utils/utils";
import CharacterFilters from "../components/CharacterFilters";

const CharacterPage: FC = () => {
  const characterId = Number(useParams().id);
  const navigate = useNavigate();

  useEffect(() => {
    characters.getSingleCharacter(characterId)
  }, [])

  return (
    <div>
      <MainHeader />
      <main className='main-wrapper main-wrapper--character-page'>
        <button 
        className='characterPage__button-back'
        onClick={() => navigate('/')}
        >
          Go Back
        </button>
        <div className='image-wrapper'>
          <img 
            className='characterPage__image' 
            src={characters.singleCharacter.image} 
            alt={characters.singleCharacter.name}
            style={{borderColor: `${statusCheck(characters.singleCharacter.status)}`}} 
          />
          <h1 className='characterPage__main-title'>{characters.singleCharacter.name}</h1>
        </div>
        <div className='informations-wrapper'>
          <CharacterInformationsList />
          <CharacterEpisodesList />  
        </div>
      </main>  
    </div>
  )
}

export default observer(CharacterPage);