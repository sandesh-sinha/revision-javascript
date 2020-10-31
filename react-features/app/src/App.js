import React, { Component } from 'react'
import classes from  './App.css'
import Person from './Person/Person';
import {uuid} from 'uuidv4';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
class App extends Component {
  state = {
    persons : [
      {id : uuid(),name : 'Max', age: 28},
      {id :uuid() , name : 'Manu', age : 29},
      {id :uuid(), name: 'Stephanie', age : 26}
    ],
    type : 0,
    showPerson : false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id===id);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const show = this.state.showPerson;
     this.setState({
       showPerson: !show,
     })
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  //  In functional component using hooks replaces
  // the current state with the new state not merge them as in setState in class component
  // Create  multiple states and hooks for different state this.props.
  // this.props in class component and props in functional component
  
  render() {
    let persons = null;
    let btnClass = "";
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map( (person,index) => {
            return (
                <Person 
                name={person.name} 
                age={person.age}
                click={ () => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              )
          })}
        </div>
      );
      btnClass = classes.red;
    }
    const assignedclasses = [];
    if(this.state.persons.length <=2){
      assignedclasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      assignedclasses.push(classes.bold);
    }
    return (
        <div className={classes.App}>
          <h1>React App</h1>
          <h3 className={assignedclasses.join(' ')}> Check this out </h3>
          <button className={btnClass} onClick={this.togglePersonsHandler}>Diplay</button>
          {persons}
        </div>
    )
  }
}

export default App;

// Radium for :hover like pseudo selectors and media query 

