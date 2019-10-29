import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead className="talk-table-head">
      <tr>
        <th>Talk</th>
        <th>Action</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.talks.map((talk, index) => {
    return (
      <tr key={index} className="talk-table-row">
        <td>{talk.title}</td>
        <td>
          <span role="img" aria-label="remove">🗑</span>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { talks } = this.props

    return (
      <table className="talk-table">
        <TableHeader />
        <TableBody talks={talks} />
      </table>
    )
  }
}

export default Table
