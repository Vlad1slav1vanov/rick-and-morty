import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import LocationsList from "../../components/Locations/LocationsList/LocationsList";
import Header from "../../components/UI/Header/Header";
import MainLogo from "../../components/UI/MainLogo/MainLogo";
import SearchQuantity from "../../components/UI/SearchQuantity/SearchQuantity";
import locations from "../../store/LocationsListStore/LocationsListStore";

const LocationsPage: FC = () => {
  const logoParams = {
    url: {
      mobile: './images/main-logo-locations.png',
      desktop: './images/main-logo-locations-desktop.png',
    },

    size: {
      mobile: {
        width: 218,
        height: 136,
      },

      desktop: {
        width: 326,
        height: 202,
      },
    },
  }

  return (
    <div>
      <Header />
      <main className='main-wrapper'>
        <MainLogo props={logoParams} />
        <SearchQuantity quantity={locations.locationsQuantity} searchItems='locations'/>
        <LocationsList />
      </main>
    </div>
  )
}

export default observer(LocationsPage);