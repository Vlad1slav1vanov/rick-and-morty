import React, {  FC } from "react";
import { observer } from "mobx-react-lite";
import characters from "../store/characters";


const CharacterFilters: FC = () => {
  return (
  <form className='search-character'>
    <input className='search-character__name' value={characters.name} onChange={characters.nameOnChange} type='text' placeholder='Search by name...'/>
    <div className='search-character__selects-wrapper'>
      <select value={characters.status} onChange={characters.statusOnChange} className='search-character__status'>
        <option value=''>All</option>
        <option value='alive'>Alive</option>
        <option value='dead'>Dead</option>
        <option value='unknown'>Unknown</option>
      </select>
      <select value={characters.gender} onChange={characters.genderOnChange} className='search-character__gender'>
        <option value=''>All</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>
    </div>
    <p>
      <span>
        Found:
      </span>
      <span>
        
      </span>
    </p>
  </form>
  )
}

export default observer(CharacterFilters);