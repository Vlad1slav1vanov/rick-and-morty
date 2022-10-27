import { observer } from "mobx-react-lite";
import React from "react";
import characters from "../store/characters";

const CharacterInformationsList = () => {
  return (
    <section className='character-informations'>
      <h2 className='character-informations__main-title'>Informations</h2>
      <ul className='character-informations__list'>
        <li className='character-informations__item'>
          <h3 className='character-informations__item-title'>Gender</h3>
          <p className='character-informations__item-description'>
            {characters.singleCharacter.gender}
          </p>
        </li>
        <li className='character-informations__item'>
          <h3 className='character-informations__item-title'>Status</h3>
          <p className='character-informations__item-description'>
            {characters.singleCharacter.status}
          </p>
        </li>
        <li className='character-informations__item'>
          <h3 className='character-informations__item-title'>Specie</h3>
          <p className='character-informations__item-description'>
            {characters.singleCharacter.species}
          </p>
        </li>
        <li className='character-informations__item'>
          <h3 className='character-informations__item-title'>Origin</h3>
          <p className='character-informations__item-description'>
            {characters.singleCharacter.origin.name}
          </p>
        </li>
        <li className='character-informations__item'>
          <h3 className='character-informations__item-title'>Type</h3>
          <p className='character-informations__item-description'>
            {characters.singleCharacter.type}
          </p>
        </li>
        <li className='character-informations__item'>
          <h3 className='character-informations__item-title'>Location</h3>
          <p className='character-informations__item-description'>
            {characters.singleCharacter.location.name}
          </p>
        </li>
      </ul>
    </section>
  )
}

export default observer(CharacterInformationsList);