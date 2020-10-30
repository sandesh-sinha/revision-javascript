import React from 'react'

function UserOutput(props) {
    return (
        <div>
            <p>Always go lucky {props.username}</p>
            <p>Happy Go lucky !!! {props.children}</p>
        </div>
    )
}

export default UserOutput
