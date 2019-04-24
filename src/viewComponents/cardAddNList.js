import React from "react";
import InputText from "../commonComponents/inputText";
import { Link } from "react-router-dom";
import CardTableComponent from "./cardTableComponent";
class CardAddNList2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      name: "",
      cardNumber: "",
      limit: "",
      balance: ""
    };
  }

  _saveApi = card => {
    fetch("http://localhost:8080/add", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(card)
    }).then(
      res => {
        this.setState({ refresh: Math.random() });
        alert("Card Added Successfuly!");
      },
      err => {
        alert("Something went wrong!");
      }
    );
  };

  save = () => {
    let card = {
      name: this.state.name,
      number: this.state.cardNumber,
      limit: this.state.limit,
      balance: this.state.balance
    };
    if (parseFloat(card.balance) <= parseFloat(card.limit)) {
      this._saveApi(card);
    } else {
      alert("Balance cannot be more than Limit for a card!");
    }
  };

  _maxLengthLimiter = (value, maxLength) => {
    if (value.length > maxLength) {
      return (value = value.slice(0, maxLength));
    }
    return value;
  };

  _renderForm = () => {
    return (
      <form>
        <InputText
          inputtype={"text"}
          maxlength={"35"}
          onChange={text => {
            this.setState({ name: text.target.value });
          }}
          placeholder={"Name"}
        >
          Name
        </InputText>
        <InputText
          inputtype={"number"}
          onChange={text => {
            let value = this._maxLengthLimiter(text.target.value, 19);
            this.setState({ cardNumber: value });
          }}
          value={this.state.cardNumber}
          placeholder={"12345678910123"}
        >
          Card Number
        </InputText>
        <InputText
          onChange={text => {
            let value = this._maxLengthLimiter(text.target.value, 10);
            this.setState({ limit: value });
          }}
          value={this.state.limit}
          placeholder={"0"}
          inputtype={"number"}
        >
          Limit
        </InputText>
        <InputText
          onChange={text => {
            let value = this._maxLengthLimiter(text.target.value, 10);
            this.setState({ balance: value });
          }}
          value={this.state.balance}
          placeholder={"0"}
          inputtype={"number"}
        >
          Balance
        </InputText>
        <div className="btn-group">
          <button type="submit" onClick={this.save} className="btn btn-primary">
            Add
          </button>
          <Link
            className="btn btn-danger"
            style={{ marginLeft: 20 }}
            to="cancel"
          >
            Cancel
          </Link>
        </div>
      </form>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this._renderForm()}
        <CardTableComponent key={this.state.refresh} />
      </React.Fragment>
    );
  }
}
export default CardAddNList2;
