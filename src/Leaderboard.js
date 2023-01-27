import React, { useState } from "react";
import SubmitMessage from "./SubmitMessage";

const Leaderboard = (props) => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name === '') { 
      alert('Please enter a name to submit your score!!!'); 
      return 
    };
    setSubmitted(true);
  };
  
  const { time } = props;
  return (
    <div>
      <div className="overlay"></div>
      {submitted ? <SubmitMessage name={name} /> : 
        <div className="leaderboard">
          <h1>Nice Job!</h1>
          <h2>Your finished in {time} seconds</h2>
          <h2>Type your name below to post your score</h2>
          <h2>Name:</h2>
          <label htmlFor="name">
            <input type="text" 
                    name="name" 
                    id="name" 
                    onChange={(e) => setName(e.target.value)}  
                    />
          </label>
          <br />
          <button onClick={() => handleSubmit()}>Submit</button>
          <div className="scores">
            <h2>Scores</h2>
          </div>
        </div>
      }
    </div>
  );
};

export default Leaderboard;