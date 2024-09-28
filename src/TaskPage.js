import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TaskPage.css';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    // Initialize tasks
    const initialTasks = [
      {
        id: 1,
        name: "Subscribe to YouTube",
        url: "https://www.youtube.com/@Cryptobuddyy",
      },
      {
        id: 2,
        name: "Join Telegram Channel",
        url: "https://t.me/yourtelegramchannel", // Replace with your channel URL
      },
      {
        id: 3,
        name: "Join Telegram Group",
        url: "https://t.me/yourtelegramgroup", // Replace with your group URL
      },
    ];

    // Load completed tasks from local storage
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    const filteredTasks = initialTasks.filter(task => !completedTasks.includes(task.id));

    setTasks(filteredTasks);

    // Load coins from local storage
    const storedCoins = localStorage.getItem('coins');
    if (storedCoins) {
      setCoins(parseInt(storedCoins, 10));
    }
  }, []);

  const handleTaskClick = (taskId, url) => {
    // Add coins to local storage
    const newCoins = coins + 100;
    setCoins(newCoins);
    localStorage.setItem('coins', newCoins);

    // Save completed task
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    completedTasks.push(taskId);
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));

    // Redirect to the task URL
    window.open(url, "_blank");
    // Remove the completed task from the state
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="taskContainer">
      <h1>Available Tasks</h1>
      <div className="coinBox">
        <p>You have {coins} coins</p>
      </div>
      <div className="buttonContainer">
        <Link to="/">
          <button className="earnButton">Earn</button> {/* Navigate to Earn page */}
        </Link>
        <Link to="/tasks">
          <button className="taskButton">Tasks</button>
        </Link>
        <Link to="/referrals">
          <button className="referralButton">Referrals</button>
        </Link>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks available!</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="taskItem">
            <p>{task.name}</p>
            <button onClick={() => handleTaskClick(task.id, task.url)} className="completeTaskButton">
              Complete Task
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskPage;
