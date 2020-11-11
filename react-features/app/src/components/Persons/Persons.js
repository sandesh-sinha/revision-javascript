import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {
    console.log('[Persons.js] renderring');
    return (
        props.persons.map( (person,index) => {
            return (
                <Person 
                key={person.id}
                name={person.name} 
                age={person.age}
                click={ () => props.deletePerson(index)}
                changed={(event) => props.nameChanged(event, person.id)}
                />
              )
          })
    );
};

export default Persons;
