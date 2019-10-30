import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";

class Home extends Component {
  render() {
    const {
      handleSubmit,
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
          <Form handleSubmit={handleSubmit} />
        </div>
      </div>
    );
  };
};

export default Home;
