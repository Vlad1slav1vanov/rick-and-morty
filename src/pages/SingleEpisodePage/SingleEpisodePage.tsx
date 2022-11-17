import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import SinglePageCharacters from "../../components/SinglePageCharacters/SinglePageCharacters";
import ButtonBack from "../../components/UI/ButtonBack/ButtonBack";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import Footer from "../../components/UI/Footer/Footer";
import Header from "../../components/UI/Header/Header";
import Loading from "../../components/UI/Loading/Loading";
import SingleEpisodeStore from "../../store/SingleEpisodeStore/SingleEpisodeStore";

const SingleEpisodePage: FC = () => {
  const episodeId = Number(useParams().id);

  useEffect(() => {
    SingleEpisodeStore.getSingleEpisode(episodeId)
  }, [])
  
  return (
    <div className='page-wrapper'>
      <Header />
      {SingleEpisodeStore.isLoading && <Loading />}
      {SingleEpisodeStore.errorMessage 
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
        <SinglePageCharacters title="Cast:" characters={SingleEpisodeStore.singleEpisodeCharacters} />
      </main>}
      <Footer />
    </div>
  )
}

export default observer(SingleEpisodePage);