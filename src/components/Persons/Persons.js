import React, { Component } from 'react';

import Person from './Person/Person';


class Persons extends Component{

      // static getDerivedStateFromProps(props ,  state){
      //       console.log('[Perosns.js] getDerivedStateFromProps');
      //       return state;
      // };

      shouldComponentUpdate( nextProps , nextState ){
            console.log('[Perons.js] shouldComponentUpdate');
            return true; //must return true or false
      };

      getSnapshotBeforeUpdate( prevProps , prevSnapshot ){
            console.log('[Persons.js] getSnapshotBeforeUpdate');
            return {message: 'Snapshot!'};
      };

      componentDidUpdate( prevProps, prevState , snapshot){
            console.log('[Persons.js] componentDidUpdate');
            console.log(snapshot);
      };

      componentWillUnmount(){
            console.log('[Persons.js] componentWillUnmount');
      };

      render (){
            console.log('[Persons.js] renderring...');
            return this.props.persons.map( (person , index) => {
                  return <Person 
                      click={() => this.props.clicked( index )}
                      name = {person.name}
                      age = {person.age}
                      key = {person.id}
                      changed = {(event) => this.props.changed(event, person.id)}/>
          });
      }
}


export default Persons;