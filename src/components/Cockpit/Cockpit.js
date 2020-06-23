import React from 'react';

import cssclass from './Cockpit.css';

const cockpit = ( props ) => {
    
    const classes = [];

    let btnClass = '';

    if (props.showPersons){
        btnClass = cssclass.Blue;
    }
    if(props.persons.length <=2 ){
      classes.push(cssclass.red);
    }

    if (props.persons.length <= 1){
      classes.push(cssclass.bold);
    }

    return (
    <div className={cssclass.Cockpit}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={btnClass} alt={props.showPersons} onClick={props.clicked}>Toggle Person</button>
    </div>
    );
};

export default cockpit;