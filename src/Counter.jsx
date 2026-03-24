import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => {
    if (prev > 0) return prev - 1;
    return prev;
  });
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
     
      <div className="background-shape triangle shape1"></div>
      <div className="background-shape star shape2">★</div>
      <div className="background-shape triangle shape3"></div>
      <div className="background-shape star shape4">★</div>
      <div className="background-shape triangle shape5"></div>

      <div className="counter-card">
        <button className="reset-btn" onClick={reset} title="Reset">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            <path d="M3 21v-5h5" />
          </svg>
        </button>

        <div className="display-box">
          <div className="count-value">
            {count}
          </div>
        </div>

        <div className="controls">
          <button className="control-btn" onClick={increment}>+</button>
          <button className="control-btn" onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
