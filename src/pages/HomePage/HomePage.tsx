import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/UI/Footer/Footer";
import Header from "../../components/UI/Header/Header";
import MainLogo from "../../components/UI/MainLogo/MainLogo";

const HomePage: FC = () => {
  const logoParams = {
    url: {
      mobile: './images/main-logo.png',
      desktop: './images/main-logo-desktop.png',
    },

    size: {
      mobile: {
        width: 312,
        height: 104,
      },

      desktop: {
        width: 600,
        height: 200,
      },
    },
}
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-wrapper home-page">
        <MainLogo props={logoParams}/>
        <h1 className="home-page__title">knowledge base</h1>
        <p className="home-page__description">
            Hello! This is a knowledge base of Rick and Morty universe, part-time my pet project. Here you can find characters, episodes in which they participated and their home-locations. As a database, I used the free API
            <a className="home-page__link-description" href="https://rickandmortyapi.com/"> RICKANDMORTYAPI</a>. 
            I'm actively looking for my first job as a front-end developer. If you want to contact me, all my social networks you can found in the footer of this site. 
        </p>
        <nav className="home-page__navigation">
          <Link to='/characters'>
            <div className='home-page__navigation-card navigation-card active-element'>
              <h2 className="navigation-card__title">characters</h2>
              <p className="navigation-card__description">
                find your favorite (or hated) character by his name or other parameters
              </p>
            </div>
          </Link>
          <Link to='/episodes'>
            <div className='home-page__navigation-card navigation-card active-element'>
              <h2 className="navigation-card__title">episodes</h2>
              <p className="navigation-card__description">               
                find information about the episode you wanted to remember
              </p>
            </div>
          </Link>
          <Link to='/locations'>
            <div className='home-page__navigation-card navigation-card active-element'>
                <h2 className="navigation-card__title">locations</h2>
                <p className="navigation-card__description">                
                  find the location of any character
                </p>
            </div>
          </Link>
        </nav>
      </main>
      <Footer />
    </div>
  )
}

export default observer(HomePage);