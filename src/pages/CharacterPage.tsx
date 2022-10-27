import React, { useEffect } from "react";
import {observer} from 'mobx-react-lite'
import { useParams } from "react-router-dom";
import MainHeader from "../components/UI/MainHeader";
import characters from "../store/characters";
import episodes from "../store/episodes";
import CharacterEpisodesList from "../components/CharacterEpisodesList";
import CharacterInformationsList from "../components/CharacterInformationsList";
import { statusCheck } from "../utils/utils";

const CharacterPage = () => {
  const characterId = Number(useParams().id);

  useEffect(() => {
    characters.getSingleCharacter(characterId)
  }, [])

  return (
    <div>
      <MainHeader />
      <main className='main-wrapper'>
        <button className='characterPage__button-back'>Back</button>
        <img 
          className='characterPage__image' 
          src={characters.singleCharacter.image} 
          alt={characters.singleCharacter.name}
          style={{borderColor: `${statusCheck(characters.singleCharacter.status)}`}} 
        />
        <h1 className='characterPage__main-title'>{characters.singleCharacter.name}</h1>
        <CharacterInformationsList />
        <CharacterEpisodesList />  
      </main>  
    </div>
  )
}

export default observer(CharacterPage);