import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import CustomInput from "../../UI/CustomInput/CustomInput";
import episodes from "../../../store/EpisodesListStore/EpisodesListStore";

const EpisodesFilters: FC = () => {
  return (
    <form className="episodes-filters">
      <CustomInput classNames={['custom-input--search']} value={episodes.name} onChange={episodes.inputOnChange} type='text' placeholder='Search by name...'/>
    </form>
  )
}

export default observer(EpisodesFilters);