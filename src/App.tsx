import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './sass/style.scss' ;
import {observer} from 'mobx-react-lite';
import CharacterPage from './pages/CharacterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/characters' element={<HomePage />} />
        <Route path='/characters/:id' element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
