import React, { Component } from 'react';

import '../../input.css';

class Input extends Component {
  render() {
    return(
      <div className="input-container">
        <input className={"input " + this.props.class} name={this.props.name} type={this.props.type} onFocus={this.props.focusHandler} placeholder={this.props.placeholder} onChange={this.props.changeHandler} />
      </div>
    )
  }
}

Input.defaultProps = {
  class: '',
};

export default Input;
