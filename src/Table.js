import React, { Component } from "react"

const TableHeader = () => {
  return (
    <thead className="talk-table-head">
      <tr>
        <th>Talk</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.talks.map((talk, index) => {
    return (
      <tr key={index} className="talk-table-row">
        <td>{talk.title}</td>
        <td>
          <button onClick={() => props.removeTalk(index)}>
            <span role="img" aria-label="remove-talk">🗑</span>
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { talks, removeTalk } = this.props;

    return (
      <table className="talk-table">
        <TableHeader />
        <TableBody
          talks={talks}
          removeTalk={removeTalk}
        />
      </table>
    );
  };
};

export default Table
