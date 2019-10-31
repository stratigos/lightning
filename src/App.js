import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AppTitle from "./AppTitle";
import EditTalk from "./EditTalk";
import Home from "./Home";
import Nav from "./Nav";
import ShowTalk from "./ShowTalk";
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

  handleNewTalkSubmit = async talk => {
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

  handleEditTalkSubmit = async talk => {
    const response = await fetch(`/api/talks/${talk.id}/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({talk: talk}),
    });

    const talkResponse = await response.text();
    console.log("edit talk response: ", talkResponse); // TODO DEBUG 🌈
    const updatedTalk = JSON.parse(talkResponse);

    const updatedTalks = this.state.talks.map((talk, _index) => {
      if (talk.id === updatedTalk.id) {
        return updatedTalk;
      }

      return talk;
    });

    this.setState({ talks: updatedTalks });
  }

  render() {
    const { talks } = this.state;

    return (
      <Router>
        <div className="App">
          <Nav />
          <header className="App-header">
            <AppTitle />
            <Switch>
              <Route path="/" exact>
                <Home
                  handleNewTalkSubmit={this.handleNewTalkSubmit}
                  removeTalk={this.removeTalk}
                  talks={talks}
                />
              </Route>
              <Route path={`/talks/:talkId`} exact>
                <ShowTalk talks={talks} />
              </Route>
              <Route path={`/talks/:talkId/edit`} exact>
                <EditTalk
                  talks={talks}
                  handleEditTalkSubmit={this.handleEditTalkSubmit}
                />
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
    );
  };
};

export default App;
