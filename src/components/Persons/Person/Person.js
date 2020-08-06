import React, {Component} from 'react';
// import cssclass from './Person.css';
// import styled from 'styled-components';
import Auxilliary from '../../../hoc/Auxilliary';

class Person extends Component{

    render(){
        console.log('[Person.js] renderrig...')

            return (<Auxilliary>
                    <p  onClick={this.props.click}>I'm a person {this.props.name}. I am {this.props.age} years old </p>
                        <p>{this.props.children}</p>
                        <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Auxilliary>
              
            );
    };
}

export default Person;