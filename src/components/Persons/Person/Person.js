import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cssclass from './Person.css';
// import styled from 'styled-components';
import Auxilliary from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    };

    componentDidMount() {
        this.inputElementRef.current.focus()
    }

    render() {
        console.log('[Person.js] renderrig...')

        return (<Auxilliary>
            {this.props.isAuth ? <p>Authenticated</p> : <p>Please login</p>}
            <p onClick={this.props.click}>I'm a person {this.props.name}. I am {this.props.age} years old </p>
            <p key="i22" >{this.props.children}</p>
            <input key="i4345"
                type="text"
                // ref = {(inputEl) =>  this.inputElement = inputEl} 
                ref={this.inputElementRef}
                onChange={this.props.changed} value={this.props.name} />
        </Auxilliary>

        );
    };
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default withClass(Person, cssclass.Person);