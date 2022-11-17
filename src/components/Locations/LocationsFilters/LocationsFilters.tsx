import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import CustomInput from "../../UI/CustomInput/CustomInput";
import locations from '../../../store/LocationsListStore/LocationsListStore';
import CustomSelect from "../../UI/CustomSelect/CustomSelect";

const LocationsFilters: FC = () => {

  return (
    <form className="locations-filters">
      <CustomInput classNames={['custom-input--search']} value={locations.name} onChange={locations.inputOnChange} type="text" placeholder="Search by name..."/>
    </form>
  )
}

export default observer(LocationsFilters);