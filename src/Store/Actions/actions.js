import axios from 'axios';
import { ADD_CITY_MEDELLIN, SEARCH_CITY } from '../Constants/constants'
import { REACT_APP_API_KEY }  from '../../env.js';

const apiKey = REACT_APP_API_KEY

export function getCityMed(){
  return( dispatch =>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Medellin&units=metric&appid=${apiKey}`)
          .then( res =>{
            dispatch({
              type: ADD_CITY_MEDELLIN,
              payload: res.data
            })
          })
  })
}

export function searchCity(city){
  return( dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
          .then( res =>{
            dispatch({
              type: SEARCH_CITY,
              payload: res.data
            })
          })
  })
}