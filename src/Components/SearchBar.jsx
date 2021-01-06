import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { searchCity } from '../Store/Actions/actions';
import styled from 'styled-components';

const InputSearch = styled.input`
  width: 95%;
  border: none;
  padding: 17px 20px;
  margin-bottom: 100px;
  @media (max-width: 600px){
    width: 100%;
    margin-bottom: 50px;
  }
`;

const Searchbar = () => {

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const onChange = e =>{
    setSearch(e.target.value)
  }

  const onKeyPress = e =>{
    
    if(e.key === 'Enter'){
      e.preventDefault()
      dispatch(searchCity(search))
      setSearch('')
    }
  }

  return ( 
    <form>
      <InputSearch
        onChange={onChange}
        type='text'
        placeholder = 'Search other cities...'
        value={search}
        onKeyPress={onKeyPress}
       />
    </form>
   );
}
 
export default Searchbar;