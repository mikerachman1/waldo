import React from "react";

const SubmitMessage = (props) => {
  const { name } = props;

  return (
    <div className="leaderboard">
      <h1>Thanks {name}!!</h1>
      <button onClick={() => window.location.reload(false)}>
        Play again
      </button>
    </div>
  );
};

export default SubmitMessage;