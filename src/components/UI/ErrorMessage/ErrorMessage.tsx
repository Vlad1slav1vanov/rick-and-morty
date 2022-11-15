import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

interface ErrorMessageProps {
  message?: string;
  clickEvent?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const ErrorMessage: FC<ErrorMessageProps> = ({message, clickEvent}) => {
  return (
    <div className='error-message'>
      <p>{message}</p>
      {clickEvent
      ? 
      <div className='error-message__button-container'>
        <p>Reset your search?</p>
        <button onClick={clickEvent} className='active-element'>OK</button>
      </div>
      :
      <></>
      }
    </div>
  )
}

export default observer(ErrorMessage);