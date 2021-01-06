import React, {Fragment} from 'react';
import styled from 'styled-components'

import Carts from './Components/Carts';
import City from './Components/City';
import Searchbar from './Components/SearchBar';

const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`
const ContLeft = styled.div`
  width: 72%;
  height: 100%;
  padding: 150px 80px 100px 100px;
`

function App() {

  return (
    <Fragment>
      <Content>
        <ContLeft>
          <Searchbar />
          <Carts />
        </ContLeft>
        <City />
      </Content>
    </Fragment>
  );
}

export default App;
