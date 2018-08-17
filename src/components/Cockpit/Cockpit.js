import React from 'react';
// import Persons from './components/Persons/Person/Person';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
   const assignedClasses = [];
    let btnClass = '';
    // btnClass = classes.red;
    	if (props.showPersons){
    	btnClass = classes.Red;
    }
    	if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    	if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

	return(
		<div className={classes.Cockpit}>
			<h1> Hi, I am a React App</h1>
	        <p className={assignedClasses.join(' ')}>This is really working!</p>
	        <button 
	        className={btnClass}
	         onClick={props.clicked}>Toggle Person</button>
	       </div>
		);
};

export default cockpit;