import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  
  styles = {
    fontSize: 20,
    fontWeight: 'bold',
  };

  handleIncrement() {
    console.log('INCREMENT CLICKED', this.state.count)
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? 'zero' : count;
  }
}
 
export default Counter;