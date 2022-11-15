import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import locations from '../../../store/LocationsListStore/LocationsListStore'
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

const LocationsList: FC = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView();

  useEffect (() => {
    if (inView && locations.isLoading === false) {
        locations.incrementLocationsPage();
        locations.getLocations();  
    }
  }, [inView])
  
  return (
    <ul className='locations-list'>
      {locations.errorMessage 
      ?
      <ErrorMessage message={locations.errorMessage}/>
      :       
      locations.locationsList.map(location =>
        <li className='locations-list__item location-card active-element' key={location.id} onClick={(evt: React.MouseEvent<HTMLLIElement>) => navigate(`/locations/${location.id}`)}>
          <h2 className='location-card__title'>{location.name}</h2>
          <p className='location-card__type'>{location.type}</p>
          <p className='location-card__dimention'>
            {location.dimension}
          </p>
        </li>
      )}
      <div className={`viewer ${locations.errorMessage ? 'viewer--not-active' : ''}`} ref={ref}>{inView}</div>
    </ul>
  )
}

export default observer(LocationsList);