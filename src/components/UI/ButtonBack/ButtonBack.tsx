import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonBackProps {
  to: string;
}

const ButtonBack: FC<ButtonBackProps> = ({to}) => {
  const navigate = useNavigate();
  return (
    <button 
      className='button-back active-element'
      onClick={() => navigate(to)}
    >
      Go Back
    </button>
  )
}

export default observer(ButtonBack);