import React, { Component } from 'react'
import classes from  './App.css'
import Persons from '../components/Persons/Persons';
import {uuid} from 'uuidv4';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons : [
      {id : uuid(),name : 'Max', age: 28},
      {id :uuid() , name : 'Manu', age : 29},
      {id :uuid(), name: 'Stephanie', age : 26}
    ],
    type : 0,
    showPerson : false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
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
  componentDidMount(){
    console.log('[App.js] ComponentDidMount');
  }

  render() {
    console.log('[App.js] render')
    let persons = null;
    if(this.state.showPerson){
      persons = (
          <Persons persons={this.state.persons} 
            deletePerson={this.deletePersonHandler} 
            nameChanged={this.nameChangedHandler} 
          />
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            title={this.props.apptitle}
            persons={this.state.persons} 
            showPerson={this.state.showPerson}
            togglePersonsHandler={this.togglePersonsHandler}
            />
          {persons}
        </div>
    )
  }
}

export default App;

// Radium for :hover like pseudo selectors and media query 

