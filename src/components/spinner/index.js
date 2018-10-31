import React, { Component } from 'react';
import SpinkitSpinner from 'react-spinkit';

class Spinner extends Component {
  render() {
    return(
      <div className="spinner-container">
        <SpinkitSpinner name="double-bounce" color="blue" />
      </div>
    )
  }
}

export default Spinner;
