import React, { Component } from 'react';
import cssclass from './App.css';

import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'ab1', name: 'Max', age: 28 },
      { id: 'ab2sdsd', name: 'Manu', age: 29 },
      { id: 'ab3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangeHandler = ( event, id) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({} , this.state.persons[personIndex]) // same result as above

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  

  togglePersonHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex , 1);
    this.setState({persons: persons});
  }

  render() {
    
    let persons = null;
    let btnClass = [cssclass.Button];

    if (this.state.showPersons){
      persons = (    <div>
           
            {this.state.persons.map( (person , index) => {
              return <Person 
                        click={() => this.deletePersonHandler(index)}
                        name = {person.name}
                        age = {person.age}
                        key = {person.id}
                        changed = {(event) => this.nameChangeHandler(event, person.id)}/>
            })}
          
      </div> 
     );
     btnClass.push(cssclass.Blue)       
    }

    //rendring css dynamically
    const classes = [];
    if(this.state.persons.length <=2 ){
      classes.push(cssclass.red);
    }

    if (this.state.persons.length <= 1){
      classes.push(cssclass.bold);
    }
     

    return (
     
      <div className={cssclass.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={btnClass.join(' ')} alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;