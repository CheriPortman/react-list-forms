import React, { Component } from 'react';
import PropTypes from 'prop-types';

//display error if an error, console log it
//otherwise render children componenets

export default class ErrorBoundry extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  state = {
    error: false
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  componenetDidCatch(error) {
    console.error(error);
  }

  render() { 
    if(this.state.error) {
      return <h3>Error! Error!</h3>;
    }

    return this.props.children;
  }
}
