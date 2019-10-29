import React, { Component } from "react";
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
      }
    ],
  };

  removeTalk = indexToRemove => {
    const { talks } = this.state;

    this.setState({
      talks: talks.filter((_talk, index) => {
        return index !== indexToRemove
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
    const talkListItems = talks.map((talk, index) => {
      return <li key={talk.id} className="talk-list-item">{talk.title}</li>;
    });

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://thoughtbot.com/san-francisco"
            target="_blank"
            rel="noopener noreferrer"
          >Visit thoughtbot</a>
        </header>

        <div className="container">
          <ul className="talk-list">
            {talkListItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
