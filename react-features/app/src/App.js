import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
export class App extends Component {
  state = {
    persons : [
      {name : 'Max', age: 28},
      {name : 'Manu', age : 29},
      {name : 'Stephanie', age : 26}
    ],
    type : 0
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {name : newName, age: 28},
        {name : 'Manu', age : 29},
        {name : 'Stephanie', age : 28}
      ],
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name : 'Max', age: 28},
        {name : event.target.value, age : 29},
        {name : 'Stephanie', age : 28}
      ],
    })
  };

  //  In functional component using hooks replaces
  // the current state with the new state not merge them as in setState in class component
  // Create  multiple states and hooks for different state this.props.
  // this.props in class component and props in functional component
  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }
    return (
      <div className='App'>
        <h1>React App</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Max!!!!!!')}
          changed={this.nameChangedHandler}> Children data </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          />
      </div>
    )
  }
}

export default App
