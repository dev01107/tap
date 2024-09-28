// src/TapToEarn.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TapToEarn.css';
import hamsterImage from './hamster.png';

const TapToEarn = () => {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const storedCoins = localStorage.getItem('coins');
    if (storedCoins) {
      setCoins(parseInt(storedCoins, 10));
    }

    // Store a unique referral ID if it doesn't exist
    if (!localStorage.getItem('referralID')) {
      const uniqueID = 'REF' + Math.floor(Math.random() * 1000000); // Example unique ID
      localStorage.setItem('referralID', uniqueID);
    }
  }, []);

  const handleTap = () => {
    const newCoins = coins + 1;
    setCoins(newCoins);
    localStorage.setItem('coins', newCoins);
  };

  return (
    <div className="container">
      <h1>Hamster Baby</h1>
      <div className="coinBox">
        <p>You have {coins} coins</p>
      </div>
      <div className="imageContainer">
        <img 
          src={hamsterImage}
          alt="Tap to earn"
          className="circularImage"
          onClick={handleTap}
        />
      </div>
      <div className="buttonContainer">
        <Link to="/tasks">
          <button className="taskButton">Tasks</button>
        </Link>
        <Link to="/referrals"> {/* Updated link to use '/referrals' */}
          <button className="referralButton">Referral</button>
        </Link>
        <button className="earnButton" onClick={handleTap}>Earn</button>
      </div>
    </div>
  );
};

export default TapToEarn;
