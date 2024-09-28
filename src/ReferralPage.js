import React from 'react';
import { Link } from 'react-router-dom';
import './ReferralPage.css';

const ReferralPage = () => {
  const referralID = localStorage.getItem('referralID');

  return (
    <div className="referralContainer">
      <h1 className="referralTitle">🌟 Your Unique Referral Code 🌟</h1>
      <p className="referralID">{referralID}</p>
      <p className="referralNote">🎉 For every successful referral, you'll earn 500 tokens! 🎉</p>
      <div className="buttonContainer">
        <Link to="/">
          <button className="earnButton">Earn</button>
        </Link>
        <Link to="/tasks">
          <button className="taskButton">Tasks</button>
        </Link>
        <Link to="/referrals">
          <button className="referralButton">Referrals</button>
        </Link>
      </div>
    </div>
  );
};

export default ReferralPage;
