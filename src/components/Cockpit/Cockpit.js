import React,{ useEffect } from 'react';

import cssclass from './Cockpit.css';

const cockpit = ( props ) => {
    
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');

      const timer = setTimeout(() => {
        alert('Saved data to cloud!');
      },1000);
      return () => {
        clearTimeout(timer);
        console.log('[Cockpit.js] cleanup in useEffect');
      }
    },[]);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      };
    });

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
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={btnClass} alt={props.showPersons} onClick={props.clicked}>Toggle Person</button>
    </div>
    );
};

export default cockpit;