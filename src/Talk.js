import React from "react";
import { Link } from "react-router-dom";

const Talk = props => {
  const { talkRecord } = props;

  return (
    <div className="container talk-container">
      <div className="talk-title">
        <h2>{talkRecord.title}</h2>
      </div>
      <div>
        <Link to={`/talks/${talkRecord.id}/edit`}>
          <button>
            <span role="img" aria-label={`edit talk ${talkRecord.id}`}>📝</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Talk;
