import React, { useState } from 'react';
import styled from "styled-components";
import Main from '../components/Main';
import Combainer from '../components/Combainer';
import MiniContent from '../components/MiniContent';
import Test from '../components/Tester';


const arr = Array.from({ length: 4 }, (_, index) => index);

export default function App() {
  return (
    <StyledWrapper>
      {arr.map((item, index) => {
        return <Main key={index} />;
      })}
      <Combainer>
       { {
          Header: <Test />,
          Content: <Test title="Abra cadabra"/>
        }}
      </Combainer>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.main`
  max-width: 612px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 4px;
`;
