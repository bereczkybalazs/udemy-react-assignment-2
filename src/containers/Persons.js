import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import {connect} from "react-redux";
import {DELETE_PERSON, NEW_PERSON} from "../actions";

class Persons extends Component {

    personAddedHandler = (name, age) => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: name,
            age: age
        }
        this.props.onPersonAdd(newPerson)
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDelete(person.id)}/>
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
    }),
    onPersonDelete: (id) => dispatch({
      type: DELETE_PERSON,
      id: id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);