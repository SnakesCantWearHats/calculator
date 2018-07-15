import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: 0,
      second: 0,
      action: '',
      putSecondNumber: 0
    };

    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleActionClick = this.handleActionClick.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  // reset calculator
  refresh() {
    this.setState({
      first: 0,
      second: 0,
      action: '',
      putSecondNumber: 0
    });
  }

  handleNumberClick(e) {
    const symbol = parseInt(e.target.value, 10);

    // if first number is writen then start writing second number
    if (this.state.putSecondNumber) {
      if (this.state.second === 0 && symbol !== 0){
        this.setState({second: symbol});

      } else {
        const addition = this.state.second * 10 + symbol;
        this.setState({second: addition});
      };

    } else {
      if (this.state.first === 0 && symbol !== 0){
        this.setState({first: symbol});

      } else {
        const addition = this.state.first * 10 + symbol;
        this.setState({first: addition});
      };
    }
  }

  handleActionClick(e) {
    const action = e.target.value;
    
    // does this after the first input of a symbol
    if (this.state.putSecondNumber > 0 && this.state.second !== 0) {
      // does this if the input isn't equals sign
      if (action !== '=') {
        if (this.state.action === '+') {
          this.setState({first: this.state.first + this.state.second, action: action, second: 0});
  
        } else if (this.state.action === '-') {
          this.setState({first: this.state.first - this.state.second, action: action, second: 0});
  
        } else if (this.state.action === '*' || this.state.action === 'x') {
          this.setState({first: this.state.first * this.state.second, action: action, second: 0});
  
        } else if (this.state.action === '/') {
          this.setState({first: this.state.first / this.state.second, action: action, second: 0});
  
        }
        // does this if the input is equals sign
      } else {
        if (this.state.action === '+') {
          this.setState({first: this.state.first + this.state.second, action: '', second: 0});
  
        } else if (this.state.action === '-') {
          this.setState({first: this.state.first - this.state.second, action: '', second: 0});
  
        } else if (this.state.action === '*' || this.state.action === 'x') {
          this.setState({first: this.state.first * this.state.second, action: '', second: 0});
  
        } else if (this.state.action === '/') {
          this.setState({first: this.state.first / this.state.second, action: '', second: 0});
        }
      }
      // runs the first time
    } else {
      this.setState({action: action, putSecondNumber: this.state.putSecondNumber + 1});

    }
  }

  render() {
    return (
      <div className='everything'>
        <div className="app">
          <div className='header'>CALCULATOR</div>
          <div className='calc-body'>
            <div className='row screen'>
            {/* if you are typing the second number, show it. if it isnt the second number show first number or result */}
              <span className='first'>{this.state.second === 0 ? this.state.first : this.state.second} </span>
              <span className='symbol'>{this.state.action}</span>
            </div>
            <div className='row'>
              <button onClick={this.handleNumberClick} value='7' >7</button>
              <button onClick={this.handleNumberClick} value='8' >8</button>
              <button onClick={this.handleNumberClick} value='9' >9</button>
              <button onClick={this.handleActionClick} value='/' >/</button>
            </div>

            <div className='row'>
              <button onClick={this.handleNumberClick} value='4' >4</button>
              <button onClick={this.handleNumberClick} value='5' >5</button>
              <button onClick={this.handleNumberClick} value='6' >6</button>
              <button onClick={this.handleActionClick} value='x' >x</button>
            </div>

            <div className='row'>
              <button onClick={this.handleNumberClick} value='1' >1</button>
              <button onClick={this.handleNumberClick} value='2' >2</button>
              <button onClick={this.handleNumberClick} value='3' >3</button>
              <button onClick={this.handleActionClick} value='-' >-</button>
            </div>

            <div className='row'>
              <button onClick={this.handleNumberClick} value='0' >0</button>
              <button onClick={this.handleClick} value='.' >.</button>
              <button onClick={this.handleActionClick} value='=' >=</button>
              <button onClick={this.handleActionClick} value='+' >+</button>
            </div>

            <div>
              <button onClick={this.refresh}>C</button>
            </div>
          </div>
        </div>
        <footer>
          Made By Adomas Skliutas &copy;
        </footer>
      </div>
    );
  }
}

export default App;
