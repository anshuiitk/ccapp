import React from "react";
import { Link } from "react-router-dom";

class CardRow2 extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.card.name}</td>
          <td>{this.props.card.number}</td>
          <td>{this.props.card.limit}</td>
          <td>{this.props.card.balance}</td>
          {/* <td style={{ width: 1 }}>
            <Link
              className="btn btn-default btn-xs edit-button"
              to={`/card/${this.props.card.id}`}
            >
              Edit
            </Link>
          </td> */}
        </tr>
      </React.Fragment>
    );
  }
}

export default CardRow2;
