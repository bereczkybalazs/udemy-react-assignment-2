import {NEW_PERSON} from "./actions";

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_PERSON:
      return {...state, persons: [...state.persons, action.person]}
    default:
      return state
  }
}
export default reducer