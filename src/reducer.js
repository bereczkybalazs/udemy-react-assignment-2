import {DELETE_PERSON, NEW_PERSON} from "./actions";

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_PERSON:
      return {...state, persons: [...state.persons, action.person]}
    case DELETE_PERSON:
      return {...state, persons: state.persons.filter(person => person.id !== action.id)}
    default:
      return state
  }
}
export default reducer