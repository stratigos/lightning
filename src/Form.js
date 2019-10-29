import React, { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: "",
    };

    this.state = this.initialState;
  };

  handleChange = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    this.setState({
      [fieldName]: fieldValue
    });
  };

  submitForm = event => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { title } = this.state;

    return (
      <form className="talk-form">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <input
          type="button"
          value="Add Talk"
          onClick={this.submitForm}
        />
      </form>
    );
  };
};

export default Form;
