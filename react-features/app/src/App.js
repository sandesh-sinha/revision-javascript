import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person';
import {uuid} from 'uuidv4';
import Radium , {StyleRoot} from 'radium';
export class App extends Component {
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
    const style = {
      backgroundColor : 'green',
      color : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer',
      ':hover' : {
        backgroundColor : 'lightGreen',
        color : 'black'
      }
    }
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map( (person,index) => {
            return (
            <Person 
              name={person.name} 
              age={person.age}
              click={ () => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />)
          })}
        </div>
      );
      style.backgroundColor  = 'red';  //Everything is javascript 
      style[':hover']  = {
        backgroundColor : 'orange',
        color : 'black'
      }
    }
    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }


    return (
      <StyleRoot>
        <div className='App'>
          <h1>React App</h1>
          <h3 className={classes.join(' ')}> Check this out </h3>
          <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
          { persons}
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);

// Radium for :hover like pseudo selectors and media query 

