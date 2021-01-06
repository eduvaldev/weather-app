import React from 'react';
import styled from 'styled-components'

const Inf = styled.div`
  width: 330px;
  max-width: 330px;
  height: 160px;
  max-height: 160px;
  background-color: white;
  margin-right: 49px;
  margin-bottom: 30px;
  padding: 20px
`;

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

const Cart = ({name, sys, weather, main}) => {
  return ( 
    <Inf>
      <div>{name}, {sys.country}</div>
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