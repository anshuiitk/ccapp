import React from "react";

class InputText extends React.PureComponent {
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
          maxLength={this.props.maxlength}
          type={this.props.inputtype}
        />
      </div>
    );
  }
}

export default InputText;
