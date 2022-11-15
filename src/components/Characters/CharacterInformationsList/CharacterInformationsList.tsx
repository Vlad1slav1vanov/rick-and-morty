import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import singleCharacter from "../../../store/singleCharacterStore/singleCharacterStore";

const CharacterInformationsList: FC = () => {
  const navigate = useNavigate();

  const getLocationId = (url: string) => {
    const splitUrl = url.split('/')
    const id = splitUrl[splitUrl.length - 1]
    const pageNav = `/locations/${id}`
    return pageNav
  }

  return (
    <section className='character-informations'>
      <h2 className='character-informations__main-title'>Informations</h2>
      <ul className='character-informations__list'>
        <li className='character-informations__item'>
          <h3 className='character-informations__item-title'>Gender</h3>
          <p className='character-informations__item-description'>
            {singleCharacter.singleCharacter.gender}
          </p>
        </li>
        <li className='character-informations__item'>
          <h3 className='character-informations__item-title'>Status</h3>
          <p className='character-informations__item-description'>
            {singleCharacter.singleCharacter.status}
          </p>
        </li>
        <li className='character-informations__item'>
          <h3 className='character-informations__item-title'>Specie</h3>
          <p className='character-informations__item-description'>
            {singleCharacter.singleCharacter.species}
          </p>
        </li>
        <li className='character-informations__item'>
          <h3 className='character-informations__item-title'>Origin</h3>
          <p className='character-informations__item-description'>
            {singleCharacter.singleCharacter.origin.name}
          </p>
        </li>
        <li style={{display: singleCharacter.singleCharacter.type === '' ? 'none' : 'block'}} className='character-informations__item'>
          <h3 className='character-informations__item-title'>Type</h3>
          <p className='character-informations__item-description'>
            {singleCharacter.singleCharacter.type}
          </p>
        </li>
        <li className='character-informations__item active-element' 
          onClick={() => 
            navigate(getLocationId(singleCharacter.singleCharacter.location.url))}
        >
          <h3 className='character-informations__item-title'>Location</h3>
          <p className='character-informations__item-description'>
            {singleCharacter.singleCharacter.location.name}
          </p>
        </li>
      </ul>
    </section>
  )
}

export default observer(CharacterInformationsList);