import React, { useEffect, useState } from "react";
import SubmitMessage from "./SubmitMessage";
import db from "./firebase";
import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";

const Leaderboard = (props) => {
  const { time } = props;

  const [name, setName] = useState('');
  const [scores, setScores] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (name === '') { 
      alert('Please enter a name to submit your score!!!'); 
      return 
    };
    await addDoc(collection(db, "scores"), {
      name: name,
      time: time
    });
    setSubmitted(true);
  };

  useEffect(() => {
    async function fetchScores() {
      const scoresRef = collection(db, "scores");
      const dbScores = await getDocs(query(scoresRef, orderBy('time')));
      const fetchedScores = [];
      dbScores.forEach((score) => {
        fetchedScores.push({ id: score.id, data: score.data() });
      });
      setScores(fetchedScores);
    }
    fetchScores();
  }, []);

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
          <h2>Scores:</h2>
          <div className="scores">
            {scores.map((score) => (
              <div key={score.id}>
                <span>{score.data.name}</span>
                <span>{score.data.time} seconds</span>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Leaderboard;