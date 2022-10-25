import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage';
import HomePage from './pages/HomePage';
import './sass/style.scss' ;
import {observer} from 'mobx-react-lite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/characters' element={<HomePage />} />
        <Route path='/character/:id' element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
