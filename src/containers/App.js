import React, { Component } from 'react';
import cssclass from './App.css';


import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxilliary from '../hoc/Auxilliary';


class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 'ab1', name: 'Max', age: 28 },
      { id: 'ab2sdsd', name: 'Manu', age: 29 },
      { id: 'ab3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromPros ', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  //if not included by default true
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

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
    console.log('[App.js] render');
    let persons = null;
    

    if (this.state.showPersons){
      persons =  <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/> 
            
    }

    //rendring css dynamically
    
     

    return (
      
      <Auxilliary>
        <button onClick={() => {
          this.setState( {showCockpit: false} )}
          }
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
          personsLength={this.state.persons.length}/> : 
          null}
        {persons}
      </Auxilliary>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App,cssclass.App);