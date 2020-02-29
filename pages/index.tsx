import React, { useState, useRef, useCallback, useEffect, useReducer, createContext } from 'react';
import styled from "styled-components";
import { reducer, getInitialState, Actions } from '../reducer/infoReducer';
import Main from '../components/Main';
import { transportInfo } from '../components/mooks';

export const InfoContext = createContext(null);

const arr = Array.from({ length: 4 }, (_, index) => index);

export default function App() {

  const [
    state,
    dispatch
  ] = useReducer(reducer, getInitialState({}));

  useEffect(() => {
    console.log(state);
  }, [state])
  return (
    <StyledWrapper>
      
      <InfoContext.Provider value={[state, dispatch]}>
        <Main
          line={transportInfo.line}
          transport={transportInfo.transport}
        />
      </InfoContext.Provider>
    </StyledWrapper>

  );
}

const StyledWrapper = styled.main`
  max-width: 612px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: tomato;
  overflow: hidden;
  .content {
    max-width: 400px;
    margin: 0 auto;
  }
`;
