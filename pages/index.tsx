import React, { useState, useRef, useCallback, useEffect, useReducer, createContext } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { useViewportScroll } from 'framer-motion';
import Sticky from '../components/Sticky';
export const InfoContext = createContext(null);

const arr = Array.from({ length: 4 }, (_, index) => index);

export default function App() {

  const [max, setMax] = useState(false);

  return (
    <>
      <GlobalStyles />
      <StyledWrapper
        isMax={max}
      >
        <div className="header">
          Head1er
          Head1er
          Hea1der
          Hea1der
          Header
          Header
      </div>
        <Sticky
        top={0}
        indexZ={15}
        >
          {max ?
            <div className="title title__max">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, sunt!
              Voluptatum facere totam corrupti accusantium quas minus quis. Libero dolore voluptates fugit!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, sunt!
              Voluptatum facere totam corrupti accusantium quas minus quis. Libero dolore voluptates fugit!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, sunt!
              Voluptatum facere totam corrupti accusantium quas minus quis. Libero dolore voluptates fugit!
          <button onClick={() => setMax(false)}>
                CLICK
          </button>
            </div> :
            <div className="title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, sunt!
              Voluptatum facere totam co1rrupti accusantium quas minus quis. Libero dolore voluptates fugit!
        <button onClick={() => setMax(true)}>
                CLICK
        </button>
            </div>
          }
        </Sticky>
        <Sticky
          top={40}
          indexZ={10}
        >
<ul className="list"><li>1</li>
<li>2</li>
<li>3</li>
<li>4</li></ul>

          </Sticky>

      </StyledWrapper>
    </>
  );
}

const GlobalStyles = createGlobalStyle`

  body {
    padding: 0;
    margin: 0;
  }

`;

type StylesProps = {
  isFix: boolean
}

const StyledWrapper = styled.main<{ isFix: boolean, isMax: boolean }>`
  max-width: 612px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: tomato;
  overflow: hidden;
  padding-bottom: 1500px;
  .content {
    padding: 150px 15px;
    margin: 0 auto;
  }
  .header {
    padding: 20px 15px;
  }

  .title {
   
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid red;
    ${props => props.isFix && css`
      background-color: blue;
    `}
  }

  .sticky {
 
    &__outer {
      ${props => props.isfix && css`
        height: 148px;
      `}
    }

    &__first { 
      padding: 0 15px;

      ${props => props.isfix && css`
        position: fixed;
        top: 0;
      `}
    }

    &__second {
      padding: 0 15px;

      ${props => props.isfix && css`
        position: fixed;
        top: ${props.isMax ? '203px' : '77px'};
        /* transform: translateY(73px); */
      `}
    }
  }
  .list {
    background-color: #fff;
    padding: 0;
    margin: 0;
  }
`;
