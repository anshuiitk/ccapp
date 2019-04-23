import React from "react";
import InputText2 from "./inputText2";
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

  save = e => {
    let card = {
      name: this.state.name,
      number: this.state.cardNumber,
      limit: this.state.limit,
      balance: this.state.balance
    };
    if (card.balance <= card.limit) {
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
          console.log("success");
        },
        err => {
          alert("Something went wrong!");
          console.log("failure");
        }
      );
    } else {
      alert("Balance cannot be more than Limit for a card!");
    }
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <InputText2
            inputType={"text"}
            maxLength={"35"}
            onChange={text => {
              this.setState({ name: text.target.value });
            }}
            placeholder={"Name"}
          >
            Name
          </InputText2>
          <InputText2
            maxLength={"19"}
            inputType={"number"}
            onChange={text => {
              this.setState({ cardNumber: text.target.value });
            }}
            value={this.state.cardNumber}
            placeholder={"12345678910123"}
          >
            Card Number
          </InputText2>
          <InputText2
            maxLength={"10"}
            onChange={text => {
              this.setState({ limit: text.target.value });
            }}
            value={this.state.limit}
            placeholder={"0"}
            inputType={"number"}
          >
            Limit
          </InputText2>
          <InputText2
            maxLength={"10"}
            onChange={text => {
              this.setState({ balance: text.target.value });
            }}
            value={this.state.balance}
            placeholder={"0"}
            inputType={"number"}
          >
            Balance
          </InputText2>
          <div className="btn-group">
            <button
              type="submit"
              onClick={this.save}
              className="btn btn-primary"
            >
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
        <CardTableComponent key={this.state.refresh} />
      </React.Fragment>
    );
  }
}
export default CardAddNList2;
