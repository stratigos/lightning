import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <span role="img" aria-label="home">⚡🗣</span>
                </Link>
              </li>
              <li>
                <a
                  className="App-link"
                  href="https://thoughtbot.com/san-francisco"
                  target="_blank"
                  rel="noopener noreferrer"
                >Visit thoughtbot</a>
              </li>
            </ul>
          </nav>
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
          </header>
          <Switch>
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
