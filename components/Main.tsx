import React from "react";
import styled from "styled-components";
import Header from "./Header";
import MaxiContent from "./MaxiContent";
import { CSSTransition } from 'react-transition-group';
import MiniContent from "./MiniContent";


export default function Main() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [height, setHeight] = React.useState(0);
  const [showMin, setShowMin] = React.useState(true);
  const [showMax, setShowMax] = React.useState(false);
  const [minHeight, setMinHeight] = React.useState(0);

  const openHandler = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const heightCalc = (h: number) => {
    setHeight(h);
    console.log(h)
  }

  const minHeightCalc = (h: number) => {
    setMinHeight(h);
    console.log(h)
  }

  return (
    <StyledWrapper
      height={height}
      minHeight={minHeight}
    >
      <Header
        height={minHeight}
        onClick={openHandler}
        isOpen={showMin}
        className="main__header"
        minHeightCalc={minHeightCalc}
      />


      <CSSTransition
        in={isOpen}
        classNames="anima"
        timeout={300}
        onExit={() => setShowMin(true)}
        onExited={() => setShowMax(false)}
        onEnter={() => {
          setShowMax(true)
          setShowMin(false)
        }}
      >
        <div className="animation-content">
          <MaxiContent
            isOpen={showMax}
            calcheight={heightCalc}
          />
        </div>
      </CSSTransition>

    </StyledWrapper>
  );
}

type StylesProps = {
  height: number,
  minHeight: number
};

const StyledWrapper = styled.div<StylesProps>`

  .animation-content {
    overflow: hidden;
    background-color: #fff;
  }

  .anima {

    &-enter {
      height: 0;
      opacity: 0;
    }

    &-enter-active {
      height: ${props => props.height}px;
      opacity: 1;
      transition: all 300ms; 
    }

    &-enter-done {
      height: ${props => props.height}px;
      opacity: 1;
    }

    &-exit {
      height: ${props => props.height}px;
      opacity: 1;
    }

    &-exit-active {
      height: 0;
      opacity: 0;
      transition: all 300ms; 
    }
  }


`;
