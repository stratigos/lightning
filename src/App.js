import React, { Component } from "react";
import Table from "./Table"
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

  // 🏗 ----- Construction - this isnt here! ----- 🙈
  // removeTalk = indexToRemove => {
  //   const { talks } = this.state;

  //   this.setState({
  //     talks: talks.filter((_talk, index) => {
  //       return index !== indexToRemove
  //     })
  //   });
  // };

  // handleSubmit = talk => {
  //   this.setState({
  //     talks: [...this.state.talks, talk]
  //   });
  // };

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
            <Table talks={talks} />
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
  }
}

export default App;
