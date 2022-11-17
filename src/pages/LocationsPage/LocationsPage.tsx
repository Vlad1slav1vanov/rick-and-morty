import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import LocationsFilters from "../../components/Locations/LocationsFilters/LocationsFilters";
import LocationsList from "../../components/Locations/LocationsList/LocationsList";
import Footer from "../../components/UI/Footer/Footer";
import Header from "../../components/UI/Header/Header";
import Loading from "../../components/UI/Loading/Loading";
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
    <div className='page-wrapper'>
      <Header />
      {locations.isLoading && <Loading/>}
      <main className='main-wrapper'>
        <MainLogo props={logoParams} />
        <LocationsFilters />
        <SearchQuantity quantity={locations.locationsQuantity} searchItems='locations'/>
        <LocationsList />
      </main>
      <Footer />
    </div>
  )
}

export default observer(LocationsPage);