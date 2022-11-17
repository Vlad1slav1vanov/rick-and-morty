import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './sass/style.scss' ;
import {observer} from 'mobx-react-lite';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import SingleCharacterPage from './pages/SingleCharacterPage/SingleCharacterPage';
import EpisodesPage from './pages/EpisodesPage/EpisodesPage';
import SingleEpisodePage from './pages/SingleEpisodePage/SingleEpisodePage';
import LocationsPage from './pages/LocationsPage/LocationsPage';
import SingleLocationPage from './pages/SingleLocationPage/SingleLocationPage';
import HomePage from './pages/HomePage/HomePage';
import ButtonTop from './components/UI/ButtonTop/ButtonTop';
import { useEffect, useState } from 'react';

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <BrowserRouter>
      {scroll > document.documentElement.clientHeight && <ButtonTop/>}
      <Routes>
        <Route path='/characters' element={<CharactersPage />} />
        <Route path='/characters/:id' element={<SingleCharacterPage />} />
        <Route path='/episodes' element={<EpisodesPage /> } />
        <Route path='/episodes/:id' element={<SingleEpisodePage/> } />
        <Route path='/locations' element={<LocationsPage />} />
        <Route path='/locations/:id' element={<SingleLocationPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
