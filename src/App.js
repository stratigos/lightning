import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import "./App.css";

class App extends Component {
  state = {
    talks: [],
  };

  componentDidMount() {
    this.requestTalks();
  };

  requestTalks = () => {
    this.callApi()
      .then(res => this.setState({ talks: res.talks }))
      .catch(err => console.log("Error reaching Talks API: ", err));
  };

  callApi = async () => {
    const response = await fetch("/api/talks");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  };

  removeTalk = indexToRemove => {
    const { talks } = this.state;

    this.setState({
      talks: talks.filter((_talk, index) => {
        return index !== indexToRemove;
      })
    });
  };

  handleSubmit = async talk => {
    const response = await fetch("/api/talks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ talk: talk }),
    });

    const talkResponse = await response.text();
    const newTalk = JSON.parse(talkResponse);

    this.setState({ talks: [...this.state.talks, newTalk] });
  };

  render() {
    const { talks } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            <span role="img" aria-label="lightning">⚡</span>
            &nbsp;Ligtning&nbsp;
            <span role="img">🗣</span>
            &nbsp;Talks&nbsp;
            <span role="img" aria-label="lightning">⚡</span>
          </p>
          <div className="container talk-table-container">
            <Table
              talks={talks}
              removeTalk={this.removeTalk}
            />
          </div>
          <div className="container talk-form-container">
            <Form handleSubmit={this.handleSubmit} />
          </div>
          <div className="container">
            <a
              className="App-link"
              href="https://thoughtbot.com/san-francisco"
              target="_blank"
              rel="noopener noreferrer"
            >Visit thoughtbot</a>
          </div>
        </header>
      </div>
    );
  };
};

export default App;
