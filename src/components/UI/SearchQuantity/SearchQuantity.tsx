import { observer } from "mobx-react-lite";
import React, { FC } from "react";

interface SearchQuantityProps {
  quantity: number | null;
  searchItems: string;
}

const SearchQuantity: FC<SearchQuantityProps> = ({quantity, searchItems}) => {
  return (
    <div className='search-quantity'>
      Found {quantity} {searchItems}
    </div>
  )
}

export default observer(SearchQuantity);