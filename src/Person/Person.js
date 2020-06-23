import React from 'react';
import cssclass from './Person.css';
// import styled from 'styled-components';

const person = (props) => {

    

return (
        <div className={cssclass.Person}>
            <p onClick={props.click}>I'm a person {props.name}. I am {props.age} years old </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;