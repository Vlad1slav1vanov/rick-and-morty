import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

interface IOptions {
  id: number;
  option: string;
}

interface CustomSelectProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  classNames?: string[];
  options: IOptions[];
}

const CustomSelect: FC<CustomSelectProps> = ({value, onChange, classNames, options}) => {
  return (
    <select value={value} onChange={onChange} className={`custom-select ${classNames}`}>
      {options.map(option => 
        option.option === 'All' 
        ? 
        <option key={option.id} value=''>{option.option}</option>
        :
        <option key={option.id} value={option.option.toLowerCase()}>{option.option}</option>
      )}
    </select>
  )
}

export default observer(CustomSelect);