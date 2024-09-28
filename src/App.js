import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TapToEarn from './TapToEarn';
import TaskPage from './TaskPage'; // Import the TaskPage component
import ReferralPage from './ReferralPage'; // Import the ReferralPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TapToEarn />} />
        <Route path="/tasks" element={<TaskPage />} /> {/* Route for Task Page */}
        <Route path="/referrals" element={<ReferralPage />} /> {/* Route for Referral Page */}
      </Routes>
    </Router>
  );
};

export default App;
