import React from "react";
import CardRow from "../commonComponents/cardRow";

class CardTableComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { cardList: [] };
  }

  componentWillMount() {
    fetch("/api/getAll")
      .then(rsp => rsp.json())
      .then(cards => this.setState({ cardList: cards }));
  }

  _renderCardRows = () => {
    let rows = this.state.cardList.map((card, index) => (
      <CardRow key={index} card={card} />
    ));

    return rows;
  };

  render() {
    return (
      <React.Fragment>
        {this.state.cardList.length > 0 ? (
          <React.Fragment>
            <div>
              <br />
              <br />
              <br />
              Existing Cards
            </div>
            <div>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Limit</th>
                    <th>balance</th>
                  </tr>
                </thead>
                <tbody>{this._renderCardRows()}</tbody>
              </table>
            </div>
          </React.Fragment>
        ) : (
          <div>
            <br />
            <br />
            <br />
            No Cards Exist
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default CardTableComponent;
