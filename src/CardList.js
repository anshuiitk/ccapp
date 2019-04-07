import React, { Component } from "react";
import { connect } from "react-redux";
import CardRow from "./CardRow";
import { cardsLoaded } from "./actions";

class CardList extends Component {
  componentDidMount() {
    fetch("/api/getAll")
      .then(rsp => rsp.json())
      .then(cards => this.props.cardsLoaded(cards));
  }

  render() {
    const rows = this.props.cards.map(card => (
      <CardRow key={card.id} card={card} />
    ));

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Number</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cardsLoaded: cards => dispatch(cardsLoaded(cards))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
