import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import EpisodesList from "../../components/Episodes/EpisodesList/EpisodesList";
import Header from "../../components/UI/Header/Header";
import Loading from "../../components/UI/Loading/Loading";
import MainLogo from "../../components/UI/MainLogo/MainLogo";
import SearchQuantity from "../../components/UI/SearchQuantity/SearchQuantity";
import EpisodesListStore from "../../store/EpisodesListStore/EpisodesListStore";

const EpisodesPage: FC = () => {
  const logoParams = {
    url: {
      mobile: './images/main-logo-episodes.png',
      desktop: './images/main-logo-episodes-desktop.png',
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
      <main className='main-wrapper episodes-page'>
        <MainLogo props={logoParams}/>
        <SearchQuantity quantity={EpisodesListStore.episodesQuantity} searchItems='episodes'/>
        {EpisodesListStore.isLoading
        ?
        <Loading />
        :
        <></>
        }
        <EpisodesList />
      </main>
    </div>
  )
}

export default observer(EpisodesPage);