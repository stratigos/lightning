import React from "react";
import { useParams } from "react-router";
import Patience from "./Patience";
import Talk from "./Talk";

const ShowTalk = props => {
  const { talkId } = useParams();

  const talk = props.talks.find(
    currentTalk => currentTalk.id === parseInt(talkId, 10)
  );

  const displayTalkWhenReady = talk === undefined ?
    <Patience /> :
    <Talk talkRecord={talk} />;

  return (
    <div className="container show-talk-container">
      {displayTalkWhenReady}
    </div>
  );
};

export default ShowTalk;
