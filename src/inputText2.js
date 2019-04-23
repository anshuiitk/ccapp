import React, { Component } from "react";

class InputText2 extends Component {
  render() {
    const { value } = this.props;

    return (
      <div className="form-group">
        <label>{this.props.children}</label>
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default InputText2;
