import React, { Component } from "react";
import NewTalkForm from "./NewTalkForm";
import Table from "./Table";

class Home extends Component {
  render() {
    const {
      handleNewTalkSubmit,
      removeTalk,
      talks
    } = this.props;

    return (
      <div className="container home-container">
        <div className="container talk-table-container">
          <Table
            talks={talks}
            removeTalk={removeTalk}
          />
        </div>
        <div className="container talk-form-container">
          <NewTalkForm handleNewTalkSubmit={handleNewTalkSubmit} />
        </div>
      </div>
    );
  };
};

export default Home;
