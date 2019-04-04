import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import InputText from "./InputText";
import TextArea from "./TextArea";

import {
  cardLoaded,
  currentCardPropChanged
} from "./actions";

class CardEdit extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`/api/cards/${id}`)
      .then(rsp => rsp.json())
      .then(card => this.props.cardLoaded(card));
  }

  onChange = e => {
    this.props.currentCardPropChanged(e.prop, e.value);
  };

  save = e => {
    e.preventDefault();
    console.log(this.props.card);

    const id = this.props.match.params.id;
    const { card } = this.props;

    fetch("/api/cards/" + id, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(card)
    }).then(() => this.props.history.push("/cards"));
  };

  render() {
    const { card } = this.props;
    if (!card) return null;

    return (
      <form>
        <InputText onChange={this.onChange} prop="name" value={card.name}>
          Name
        </InputText>
        <InputText onChange={this.onChange} prop="number" value={card.number}>
          Number
        </InputText>
        <InputText onChange={this.onChange} prop="expiry" value={card.expiry}>
          Expiry
        </InputText>
        <InputText onChange={this.onChange} prop="limit" value={card.limit}>
          Limit
        </InputText>
        <div className="btn-group">
          <button type="submit" onClick={this.save} className="btn btn-primary">
            Save
          </button>
          <Link className="btn btn-danger" to="/cards">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    card: state.currentCard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cardLoaded: card => dispatch(cardLoaded(card)),
    currentCardPropChanged: (prop, value) =>
      dispatch(currentCardPropChanged(prop, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardEdit);
