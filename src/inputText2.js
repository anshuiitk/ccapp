import React, { Component } from "react";

class InputText2 extends Component {
  render() {
    const { value } = this.props;

    return (
      <div className="form-group">
        <label>{this.props.children}</label>
        <input
          className="form-control"
          value={value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxLength}
          type={this.props.inputType}
        />
      </div>
    );
  }
}

export default InputText2;
