import React, { Component } from 'react';
import './App.css';
import InputField from './components/input-field';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputField title={'Linear Search'} name={'linear-search'} isBinary={false}/><br/>
        <InputField title={'Binary Search'} name={'binary-search'} isBinary={true}/>
      </div>
    );
  }
}

export default App;
