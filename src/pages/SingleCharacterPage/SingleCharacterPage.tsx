import { FC, useEffect } from "react";
import {observer} from 'mobx-react-lite'
import { useParams } from "react-router-dom";
import MainHeader from "../../components/UI/Header/Header";
import singleCharacter from '../../store/singleCharacterStore/singleCharacterStore';
import CharacterEpisodesList from "../../components/Characters/CharacterEpisodesList/CharacterEpisodesList";
import CharacterInformationsList from "../../components/Characters/CharacterInformationsList/CharacterInformationsList";
import { statusCheck } from "../../utils/utils";
import ButtonBack from "../../components/UI/ButtonBack/ButtonBack";
import Loading from "../../components/UI/Loading/Loading";

const SingleCharacterPage: FC = () => {
  const characterId = Number(useParams().id);

  useEffect(() => {
    singleCharacter.getSingleCharacter(characterId)
  }, [])

  return (
    <div>
      <MainHeader />
      <main className='main-wrapper'>
        <ButtonBack to='/characters'/>
          {singleCharacter.isLoading ?
          <Loading />
          :
          <div style={{width: '100%'}}>
            <div className='single-character-page__image-wrapper'>  
              <img 
              className='single-character-page__image' 
              src={singleCharacter.singleCharacter.image} 
              alt={singleCharacter.singleCharacter.name}
              style={{borderColor: `${statusCheck(singleCharacter.singleCharacter.status)}`}} 
              />
              <h1 className='single-character-page__main-title'>{singleCharacter.singleCharacter.name}</h1>
            </div>
            <div className='single-character-page__informations-wrapper'>
              <CharacterInformationsList />
              <CharacterEpisodesList />  
            </div>
          </div>
        }
      </main>  
    </div>
  )
}

export default observer(SingleCharacterPage);