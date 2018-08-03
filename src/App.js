import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

class App extends Component {
    state ={
      persons:[
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
    ],
    showPersons: false
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
             <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age}/>
              <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this,'Max!!!!')}
                  nameChanged={this.nameChangeHandler}>These are my hobbies: painting.</Person>
              <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age}/>
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
      </div>
    );
  }
}

export default App;
