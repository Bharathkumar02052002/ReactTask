import { Component } from 'react';

class ClassValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Welcome to React Day 5',
    };
    console.log('ClassValue constructor called');
  }

  componentDidMount() {
    console.log('ClassValue componentDidMount called');
  }

  componentDidUpdate() {
    console.log('ClassValue componentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('ClassValue componentWillUnmount called');
  }

  changeValue = () => {
    this.setState({ value: 'Value changed using class component state' });
  };

  render() {
    console.log('ClassValue render called');

    return (
      <article className="task-card">
        <h2>Class Component</h2>
        <p className="label">Value printed on screen:</p>
        <p className="output">{this.state.value}</p>
        <button onClick={this.changeValue}>Change Value</button>
      </article>
    );
  }
}

export default ClassValue;
