import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function Players({ assigned, onNext }) {
  const [isWordVisible, setIsWordVisible] = useState(false);
  const nav = useNavigate();



  const handleShowClick = () => {
    setIsWordVisible(true);
  };

  const handleCloseClick = () => {
    setIsWordVisible(false);
    onNext();
  };

  const locationChange = () => {
    nav("/");
  };

  return (
    <div className="mycard">
      <div className='card bge'>
        <div className="card-header">
          <p>{assigned.player}</p>
        </div>
        <div className="card-body">
          <p>{isWordVisible ? assigned.word : `Sözünə baxmaq üçün Göstər-ə kliklə!`}</p>
        </div>
        <div className="card-footer">
          <button onClick={handleShowClick}>Göstər</button>
          <button onClick={handleCloseClick}>Bağla</button>
        </div>
      </div>
      <div className="lastbtn pt-5">
        <Button onClick={locationChange} variant='contained'>Yenidən Başla</Button>
      </div>
    </div>
  );
}

export default Players;
