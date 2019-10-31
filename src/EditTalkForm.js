import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class EditTalkForm extends Component {
  constructor(props) {
    super(props);

    const { talkRecord } = props;

    this.initialState = {
      talk: {
        id: talkRecord.id,
        title: talkRecord.title,
      },
    };

    this.state = this.initialState;
  };

  handleChange = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    let talkRecord = this.state.talk;

    talkRecord[fieldName] = fieldValue;

    this.setState({ talk: talkRecord });
  };

  submitForm = event => {
    event.preventDefault();

    const talkRecord = this.state.talk;

    this.props.handleEditTalkSubmit(talkRecord);
    this.props.history.push("/");
  };

  render() {
    const { id, title } = this.state.talk;

    return (
      <form className="edit-talk-form">
        <input
          type="hidden"
          name="id"
          value={id}
        />
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <input
          type="button"
          value="Edit Talk"
          onClick={this.submitForm}
        />
      </form>
    );
  };
};

export default withRouter(EditTalkForm);
