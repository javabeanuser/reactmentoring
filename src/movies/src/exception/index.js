import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Oh, I am bound to kill the developer');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong with movies.</h1>;
    }

    return this.props.children; 
  }

}