import React, { Component } from "react";

class Input extends Component {
  render() {
    const id = Math.random();
    return (
      <div class="form-group row">
        <label htmlFor={id} className="col-sm-2 col-form-label">
          {this.props.label}:
        </label>
        <div class="col-sm-10">
          <input
            id={id}
            type={this.props.type}
            required
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

export default Input;
