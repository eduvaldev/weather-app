import React from 'react';
import { useDispatch } from "react-redux";
import { closeCity } from '../Store/Actions/actions';

import styled from 'styled-components';

const Inf = styled.div`
  width: 330px;
  height: 160px;
  max-height: 160px;
  background-color: white;
  margin-right: 49px;
  margin-bottom: 30px;
  padding: 20px;
  @media (max-width: 900px){
    width: 80%;
    margin: auto;
    margin-bottom: 30px;
  }
  @media (max-width: 600px){
    width: 80%;
    margin: auto;
    margin-bottom: 30px;
  }
`;

const InfTop = styled.div`
  display: flex;
  justify-content: space-between;
  & > button{
    background-color: #DC3545;
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 3px;
    color: white;
    font-weight: 300;
  }
  & > button:hover{
    cursor: pointer;
  }
`

const InfBot = styled.div`
  display: flex;
  margin-top: 10px;
  & > img{
    width: 90px;
    height: 90px;
  }
`

const Temp = styled.div`
  margin-left: 30px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  & > h1{
    font-size: 45px;
  }
  & > h4{
    font-size: 20px;
    font-weight: 400;
  }
`;

const Cart = ({name, sys, weather, main, id}) => {
  
  const dispatch = useDispatch();

  const cerrar = () =>{dispatch(closeCity(id))} ;

  return ( 
    <Inf>
      <InfTop>
        <div>{name}, {sys.country}</div>
        <button 
          onClick = {cerrar}
        >X</button>
      </InfTop>
      <InfBot>
        <img src = {`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}/>
        <Temp>
          <h4>{weather[0].main}</h4>  
          <h1>{Math.round(main.temp)}°C</h1>
        </Temp>  
      </InfBot>
    </Inf>
   );
}
 
export default Cart;