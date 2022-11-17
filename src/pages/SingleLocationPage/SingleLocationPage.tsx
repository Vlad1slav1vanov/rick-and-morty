import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import SinglePageCharacters from "../../components/SinglePageCharacters/SinglePageCharacters";
import ButtonBack from "../../components/UI/ButtonBack/ButtonBack";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import Footer from "../../components/UI/Footer/Footer";
import Header from "../../components/UI/Header/Header";
import Loading from "../../components/UI/Loading/Loading";
import SingleLocationStore from "../../store/SingleLocationStore/SingleLocationStore";
import singleLocationStore from "../../store/SingleLocationStore/SingleLocationStore";

const SingleLocationPage: FC = () => {
  const locationId = Number(useParams().id);

  useEffect(() => {
    singleLocationStore.getSingleLocation(locationId)
  }, [])

  return (
    <div className='page-wrapper'>
      <Header />
      {SingleLocationStore.isLoading && <Loading />}
      {singleLocationStore.errorMessage 
      ?
      <ErrorMessage message={singleLocationStore.errorMessage} />
      :
      <main className='main-wrapper single-location-page'>
        <ButtonBack to='/locations'/>
        <h1 className='single-episode-page__title'>{singleLocationStore.singleLocation.name}</h1>
        <p className='single-episode-page__air-date'>Type: {singleLocationStore.singleLocation.type}</p>
        <p className='single-episode-page__air-date'>Dimension: {singleLocationStore.singleLocation.dimension}</p>
        <SinglePageCharacters title="Residents:" characters={singleLocationStore.singleLocationCharacters} />
      </main>
      }
      <Footer />
    </div>
  )
}

export default observer(SingleLocationPage);