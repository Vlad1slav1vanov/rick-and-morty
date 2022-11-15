import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

interface CustomInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  classNames?: string[];
}

const CustomInput: FC<CustomInputProps> = ({classNames, value, onChange, placeholder, type}) => {
  return (
    <input className={`custom-input ${classNames}`} value={value} placeholder={placeholder} onChange={onChange} type={type}/>
  )
}

export default observer(CustomInput);