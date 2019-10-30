import React from "react";

const Talk = props => {
  const { talkRecord } = props;

  return (
    <div className="container talk-container">
      <div className="talk-title">
        <h2>{talkRecord.title}</h2>
      </div>
      <div>
        <button>
          <span role="img" aria-label={`edit-talk-${talkRecord.id}`}>📝</span>
        </button>
      </div>
    </div>
  );
};

export default Talk;
