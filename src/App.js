import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

class App extends Component {
    state ={
      persons:[
        {id:'1', name: 'Max', age: 28},
        {id:'2', name: 'Manu', age: 29},
        {id:'3', name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }


  nameChangeHandler = (event) =>{
      this.setState({      
      persons:[
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
        ]
      }
    );
 }

 deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons: persons})
 }

 togglePersonsHandler = () =>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow})

 }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

  let persons = null;
    if (this.state.showPersons){
      persons =(
        <div>
        {this.state.persons.map((person, index) =>{
          return <Person click={()=> this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id}/>
        })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1> Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button 
         onClick={this.togglePersonsHandler}
        style={style}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
