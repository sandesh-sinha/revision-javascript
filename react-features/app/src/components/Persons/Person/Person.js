import React from 'react'
import classes from './Person.css';

// StyledDiv is a component because styled.div return a componenet;

function Person(props) {
    console.log('[Person.js] rendering', props);
    return (
        // <div className='Person' style={style}>
        <div className={classes.Person} >
            <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person;
