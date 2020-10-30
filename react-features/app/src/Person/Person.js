import React from 'react'

function Person(props) {
    return (
        <div>
            <span>My name is {props.name} and I am {props.age} years old!</span>
            <span>{props.children}</span>
        </div>
    )
}

export default Person;
