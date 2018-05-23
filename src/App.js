import React, { Component } from 'react';
import './App.css';
import InputField from './components/input-field';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputField title={'Linear Search'}/><br/>
        <InputField title={'Binary Search'}/>
      </div>
    );
  }
}

export default App;
