import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleEpisodeCharactersList from "../../components/Episodes/SingleEpisodeCharactersList/SingleEpisodeCharactersList";
import ButtonBack from "../../components/UI/ButtonBack/ButtonBack";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import Header from "../../components/UI/Header/Header";
import Loading from "../../components/UI/Loading/Loading";
import SingleEpisodeStore from "../../store/SingleEpisodeStore/SingleEpisodeStore";

const SingleEpisodePage: FC = () => {
  const episodeId = Number(useParams().id);

  useEffect(() => {
    SingleEpisodeStore.getSingleEpisode(episodeId)
  }, [])
  
  return (
    <div>
      <Header />
      {SingleEpisodeStore.isLoading
      ?
      <Loading />
      :
      SingleEpisodeStore.errorMessage 
      ?
      <ErrorMessage message={SingleEpisodeStore.errorMessage}/>
      :
      <main className='main-wrapper single-episode-page'>
        <ButtonBack to='/episodes'/>
        <h1 className='single-episode-page__title'>{SingleEpisodeStore.singleEpisode.name} ({SingleEpisodeStore.singleEpisode.episode})</h1>
        <p className='single-episode-page__air-date'>
          <span>Air Date:</span>
          <span>{SingleEpisodeStore.singleEpisode.air_date}</span>
        </p>
        <SingleEpisodeCharactersList />
      </main>
      }
    </div>
  )
}

export default observer(SingleEpisodePage);