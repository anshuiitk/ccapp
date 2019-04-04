import React from "react";
import { Link } from "react-router-dom";

const CardRow = ({ card }) => (
  <tr>
    <td>{card.number}</td>
    <td style={{ width: 1 }}>
      <Link
        className="btn btn-default btn-xs edit-button"
        to={`/card/${card.id}`}
      >
        Edit
      </Link>
    </td>
  </tr>
);

export default CardRow;
