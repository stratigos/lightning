import React from "react";
import { useParams } from "react-router";
import Patience from "./Patience";
import EditTalkForm from "./EditTalkForm";

const EditTalk = props => {
  const { talkId } = useParams();

  const talk = props.talks.find(
    currentTalk => currentTalk.id === parseInt(talkId, 10)
  );

  const displayTalkFormWhenReady = talk === undefined ?
    <Patience /> :
    <EditTalkForm
      talkRecord={talk}
      handleEditTalkSubmit={props.handleEditTalkSubmit}
    />;

  return (
    <div className="container edit-talk-container">
      {displayTalkFormWhenReady}
    </div>
  );
};

export default EditTalk;
