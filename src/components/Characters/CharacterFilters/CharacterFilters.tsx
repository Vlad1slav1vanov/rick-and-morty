import {  FC } from "react";
import { observer } from "mobx-react-lite";
import characters from "../../../store/CharactersListStore/CharactersListStore";
import CustomInput from "../../UI/CustomInput/CustomInput";
import CustomSelect from "../../UI/CustomSelect/CustomSelect";


const CharacterFilters: FC = () => {
  const statusOptions = 
  [{id: 1, option: 'All',} 
  ,{id: 2, option: 'Alive',} 
  ,{id: 3, option: 'Dead',}
  ,{id: 4, option: 'Unknown',}
  ,];
  const genderOptions = 
  [{id: 1, option: 'All'}
  ,{id: 2, option: 'Male'}
  ,{id: 3, option: 'Female'}
  ,{id: 4, option: 'Genderless'}
  ,];

  return (
  <form className='character-filters'>
    <CustomInput classNames={['custom-input--search']} value={characters.name} onChange={characters.inputOnChange} type='text' placeholder='Search by name...'/>
    <div className='character-filters__selects-wrapper'>
      <CustomSelect value={characters.status} onChange={characters.statusOnChange} options={statusOptions}/>
      <CustomSelect value={characters.gender} onChange={characters.genderOnChange} options={genderOptions}/>
    </div>   
  </form>
  )
}

export default observer(CharacterFilters);