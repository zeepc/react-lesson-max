import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

class App extends Component {
    state ={
      persons:[
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    console.log('Clicked Clicked Clicked');
    this.setState({      
      persons:[
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
        ]
      }
    );
  }
  render() {
    return (
      <div className="App">
      <h1> Hi, I am a React App</h1>
      <p>This is really working!</p>
      <button onClick={this.switchNameHandler.bind(this,'Maximillian')}> Switch Name </button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this,'Max!!!!')}>These are my hobbies: painting.</Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
