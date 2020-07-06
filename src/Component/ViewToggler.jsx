import React, { Component } from "react";

class ViewToggler extends Component {
  state = {
    isVisible: false,
  };
  handleClick = (event) => {
    this.setState((currentState) => {
      return { isVisible: !currentState.isVisible };
    });
  };
  render() {
    console.log(this.props);
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isVisible ? "Hide Menu" : "Show Menu"}
        </button>
        {this.state.isVisible && this.props.children}
      </>
    );
  }
}

export default ViewToggler;
