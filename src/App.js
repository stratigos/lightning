import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import "./App.css";

class App extends Component {
  state = {
    talks: [
      {
        id: 1,
        title: "When Mystery Guests Become Stowaways"
      },
      {
        id: 2,
        title: "Top 10 Slide Animations for Designers"
      },
      {
        id: 3,
        title: "Q4 2019 Financial Updates for the Life Economy"
      }
    ],
  };

  removeTalk = indexToRemove => {
    const { talks } = this.state;

    this.setState({
      talks: talks.filter((_talk, index) => {
        return index !== indexToRemove;
      })
    });
  };

  handleSubmit = talk => {
    this.setState({
      talks: [...this.state.talks, talk]
    });
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
