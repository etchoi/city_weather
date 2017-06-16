import { FETCH_WEATHER } from '../actions/index'
export default function(state = [], action) {

  switch (action.type){
  case FETCH_WEATHER:
    return [ action.payload.data, ...state ]; //Never mutate state. Instead we create entirely new array and return it. This is ES6 syntax
  }
  return state;
}
