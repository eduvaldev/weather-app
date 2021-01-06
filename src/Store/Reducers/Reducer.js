import { ADD_CITY_MEDELLIN, SEARCH_CITY, CLOSE_CITY } from '../Constants/constants'

const initalState = {
  cities: [],
  currentCity: {},
}

const Reducer = (state = initalState, action)=>{
  switch( action.type ){

    case ADD_CITY_MEDELLIN:
      return { ...state, currentCity: action.payload }

    case SEARCH_CITY:
      var match = state.cities.filter( city => city.id === action.payload.id);
      console.log(match);
      if(match && match.length > 0 ) return { ...state }
      
      return { ...state, cities: state.cities.concat(action.payload) }

    case CLOSE_CITY :
      return{
        ...state,
        cities: state.cities.filter( city => city.id !== action.payload)
      }

    default:
      return state
  }
};

export default Reducer;
