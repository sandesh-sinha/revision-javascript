import React from 'react'

function UserInput(props) {
    return (
        <>
            <input type='text' onChange={props.changed} value={props.username}/>
        </>
    )
}

export default UserInput;
