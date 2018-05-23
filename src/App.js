import React, { Component } from 'react';
import './App.css';
import InputField from './components/input-field';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputField title={'Linear Search'} name={'linear-search'}/><br/>
        <InputField title={'Binary Search'} name={'binary-search'}/>
      </div>
    );
  }
}

export default App;
