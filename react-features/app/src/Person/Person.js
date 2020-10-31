import React from 'react'
import './Person.css';
import styled from 'styled-components';

// StyledDiv is a component because styled.div return a componenet;
const StyledDiv = styled.div`
    width: 60%;
    margin :  16px 50px ;
    border : 1px solid #808080;
    box-shadow : 0 2px 3px #ccc;
    padding : 16px;
    text-align : center; 

    @media (min-width:500px){
    width : 450px ;
    }
`;

function Person(props) {
    return (
        // <div className='Person' style={style}>
        <StyledDiv>
            <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
}

export default Person;
