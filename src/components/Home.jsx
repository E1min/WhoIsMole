import { Button } from '@mui/material';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [playerCount, setPlayerCount] = useState(1);
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    const handlePlayerCountChange = (newCount) => {
        if (newCount > 0) {
            setPlayerCount(newCount);

            let arr = [];
            for (let i = 0; i < newCount; i++) {
                arr.push(`Oyunçu ${i + 1}`);
            }
            setPlayers(arr);
        }
    };

    const increase = () => {
        const newCount = playerCount + 1;
        handlePlayerCountChange(newCount);
    };

    const decrease = () => {
        const newCount = Math.max(playerCount - 1, 0);
        handlePlayerCountChange(newCount);
    };

    const handleInputChange = (index, value) => {
        const newPlayers = [...players];
        newPlayers[index] = value;
        setPlayers(newPlayers);
    };

    const startGame = () => {
        if (players.some(player => player.trim() === '')) {
        } else if (players.length > 1) {
            navigate('/play', { state: { players } });
        }
    };

    return (
        <div className='text-center pt-1' >
            <div className="logo">
                <img src="./src/assets/images/logo.png" alt="" />
            </div>
            <div className='plcount' >
                <div className="total">
                    <p>Oyunçu Sayı </p>
                    <input
                        readOnly
                        type="text"
                        min="0"
                        max="20"
                        value={playerCount}
                        onChange={handlePlayerCountChange}
                    />
                    <div className="arrows">
                        <i onClick={increase}> <IoIosArrowUp /></i>
                        <i onClick={decrease}> <IoIosArrowDown /></i>

                    </div>
                </div>
            </div>
            <div className='pl-name-input'>
                {players.length > 0 && players.map((player, index) => (
                    <input
                        key={index}
                        type="text"
                        defaultValue={player}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                ))}
            </div>
            <button className='start-btn' onClick={startGame} style={{ marginTop: '10px', padding: '10px 20px', fontSize: '18px' }}>
                Oyuna Başla
            </button>

        </div>
    );
};

export default Home;
