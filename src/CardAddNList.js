import React, { Component } from "react";
import { connect } from "react-redux";
import CardRow from "./CardRow";
import { cardsLoaded } from "./actions";
import { currentCardPropChanged } from "./actions";
import InputText from "./InputText";
import { Link } from "react-router-dom";



class CardAddNList extends Component {
  componentDidMount() {
    fetch("/api/getAll")
      .then(rsp => rsp.json())
      .then(cards => this.props.cardsLoaded(cards));
  }

  onChange = e => {
    this.props.currentCardPropChanged(e.prop, e.value);
  };

  save = e => {
    e.preventDefault();
    console.log(this.props.card);

    const { card } = this.props;

    fetch("/api/add", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(card)
    }).then(() => this.props.history.push("/add"));
  };

  render() {
      
    const rows = this.props.cards.map(card => (
      <CardRow key={card.id} card={card} />
    ));

    return (
      <div>
        <div>
          <form>
            <InputText onChange={this.onChange} prop="name" value={card.name}>
              Name
            </InputText>
            <InputText onChange={this.onChange} prop="number" value={card.number}>
              Card Number
            </InputText>
            <InputText onChange={this.onChange} prop="limit" value={card.limit}>
              Limit
            </InputText>
            <div className="btn-group">
              <button type="submit" onClick={this.save} className="btn btn-primary">
                Add
              </button>
              <Link className="btn btn-danger" to="/cards">
                Cancel
              </Link>
            </div>
          </form>
        </div>
        <div>
          <br/>
          <br/>
          <br/>
            Existing Cards
        </div>
        <div>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th />
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    card: state.currentCard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cardLoaded: card => dispatch(cardLoaded(card)),
    cardsLoaded: cards => dispatch(cardsLoaded(cards)),
    currentCardPropChanged: (prop, value) =>
    dispatch(currentCardPropChanged(prop, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardAddNList);
