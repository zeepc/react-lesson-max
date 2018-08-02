import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Hi, I am a React App</h1>
      <p>This is really working!</p>
      <button></button>
      <Person name="Max" age="28"/>
      <Person name="Manu" age="29">These are my hobbies: painting.</Person>
      <Person name="Stephanie" age="26"/>

      </div>
    );
  }
}

export default App;
