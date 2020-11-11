import React from 'react'
import classes from './Cockpit.css';
const Cockpit = (props) => {
    const assignedclasses = [];
    if(props.persons.length <=2){
      assignedclasses.push(classes.red);
    }
    if(props.persons.length <=1){
      assignedclasses.push(classes.bold);
    }
    let btnClass = "";
    if(props.showPerson){
        btnClass = classes.red;
    }
    return (
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <h3 className={assignedclasses.join(' ')}> Check this out </h3>
          <button className={btnClass} onClick={props.togglePersonsHandler}>Diplay</button>
        </div>
    )
}

export default Cockpit;
