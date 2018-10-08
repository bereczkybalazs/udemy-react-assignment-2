import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import {connect} from "react-redux";
import {NEW_PERSON} from "../actions";

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.onPersonAdd(newPerson)
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.state.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      persons: state.persons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPersonAdd: (person) => dispatch({
      type: NEW_PERSON,
      person: person
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);