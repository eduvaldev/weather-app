import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCityMed } from '../Store/Actions/actions'

import styled from 'styled-components'

const InfoMedellin = styled.div`
  background-color: rgb(255, 255, 255, 65%);
  backdrop-filter: blur(10px);
  width: 30%;
  height: 100%;
  padding: 110px 70px 120px 70px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TextLight = styled.h4`
  font-weight: 400;
  font-size: 18px;

  display: flex;
  & > .info{
    margin-right: 30px;
    width: 50px;
  }
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 45px;
`

const Main = styled.div`
  display: flex;
  & > img{
    width: 200px; height: 200px;
  }
`;

const Temp = styled.div`
  & > h1{
    font-size: 70px;
  }
  & > h4{
    font-size: 25px;
  }
`

const City = () => {
  const state = useSelector(state => state.currentCity)
  const dispatch = useDispatch()
  const { name, sys, weather, main } = state

  useEffect( ()=>{
    dispatch(getCityMed())
  }, [])

  console.log(state)

  if( !name || !sys || !weather || !main){
    return(
      <h1> Loading ... </h1>
    )
  }

  return ( 
      <InfoMedellin>
        <TextLight> Current city</TextLight>
        <Title>{name}, {sys.country}</Title>
        <Main>
          <img src = {`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}/>
          <Temp>
            <h1>{Math.round(main.temp)}°C</h1>
            <h4>{weather[0].main}</h4>
          </Temp>  
        </Main>
        <TextLight> <p className='info'>{Math.round(main.temp_min)}°C</p>  <p>Temp. minimum</p> </TextLight>
        <TextLight> <p className='info'>{Math.round(main.temp_max)}°C</p>  <p>Temp. maximun</p> </TextLight>
        <TextLight> <p className='info'>{Math.round(main.feels_like)}°C</p>  <p>Feels like</p> </TextLight>
        <TextLight> <p className='info'>{Math.round(main.humidity)}%</p>  <p>Humidity</p> </TextLight>
      </InfoMedellin>
   );
}
 
export default City;