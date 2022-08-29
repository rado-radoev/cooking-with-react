import React, { Component } from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    }
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {style => (
          <div>
            <h4>
              <button style={style} onClick={() => this.changeCount(-1)}>-</button>
              <span>{this.state.count}</span>
              <button style={style} onClick={() => this.changeCount(1)}>+</button>
            </h4>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }

  changeCount(amount) {
    // this.setState({ count: this.state.count + amount })
    this.setState(prevState => {
      return { count: prevState.count + amount };
    })
  }
}