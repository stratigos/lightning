import React from "react";
import { useParams } from "react-router";

const ShowTalk = props => {
  const { talkId } = useParams();

  const talk = props.talks.find(
    currentTalk => currentTalk.id === parseInt(talkId, 10)
  );

  return (
    <div className="container talk-container">
      <p className="TODO-REMOVE-THIS">
        "This is some JSX where a Talk component would appear"
      </p>
    </div>
  );
};

export default ShowTalk;
