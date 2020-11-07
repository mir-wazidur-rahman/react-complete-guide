import React,{ useEffect, useRef } from 'react';

import cssclass from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = ( props ) => {

  const toggleBtnRef = useRef(null);
    
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');

      // setTimeout(() => {
      //   alert('Saved data to cloud!');
      // },1000);
      toggleBtnRef.current.click();
      return () => {
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
    if(props.personsLength <=2 ){
      classes.push(cssclass.red);
    }

    if (props.personsLength <= 1){
      classes.push(cssclass.bold);
    }

    return (
    <div className={cssclass.Cockpit}>
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button ref={toggleBtnRef} className={btnClass} alt={props.showPersons} onClick={props.clicked}>Toggle Person</button>
        <AuthContext.Consumer>
          { (context) => 
            <button onClick={context.login}>Log In</button>
          }
        </AuthContext.Consumer>
    </div>
    );
};

export default React.memo(cockpit);