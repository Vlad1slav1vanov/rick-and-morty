import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleLocationCharactersList from "../../components/Locations/SingleLocationCharactersList/SingleLocationCharactersList";
import ButtonBack from "../../components/UI/ButtonBack/ButtonBack";
import Header from "../../components/UI/Header/Header";
import singleLocationStore from "../../store/SingleLocationStore/SingleLocationStore";

const SingleLocationPage: FC = () => {
  const locationId = Number(useParams().id);

  useEffect(() => {
    singleLocationStore.getSingleLocation(locationId)
  }, [])

  return (
    <div>
      <Header />
      <main className='main-wrapper single-location-page'>
        <ButtonBack to='/locations'/>
        <h1 className='single-episode-page__title'>{singleLocationStore.singleLocation.name}</h1>
        <p className='single-episode-page__air-date'>{singleLocationStore.singleLocation.type}</p>
        <p className='single-episode-page__air-date'>{singleLocationStore.singleLocation.dimension}</p>
        <SingleLocationCharactersList />
      </main>
    </div>
  )
}

export default observer(SingleLocationPage);