import React from "react";
class CardRow extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.card.name}</td>
          <td>{this.props.card.number}</td>
          <td>{this.props.card.limit}</td>
          <td>{this.props.card.balance}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default CardRow;
