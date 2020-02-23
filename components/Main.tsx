import React from "react";
import styled from "styled-components";
import Header from "./Header";
import MaxiContent from "./MaxiContent";
import { CSSTransition } from 'react-transition-group';


export default function Main() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [height, setHeight] = React.useState(0);

  const [showMin, setShowMin] = React.useState(false);

  const openHandler = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const heightCalc = (h: number) => {
    setHeight(h);
    console.log(h)
  }

  return (
    <StyledWrapper height={height}>
      <Header onClick={openHandler} isOpen={showMin} className="main__header" />
      <CSSTransition
        in={isOpen}
        classNames="anima"
        timeout={200}
        onExited={() => setShowMin(false)}
        onEnter={() => setShowMin(true)}
      >
        <div className="animation-content">
          <MaxiContent 
          isOpen={showMin} 
          calcheight={heightCalc}
          />
        </div>
      </CSSTransition>

    </StyledWrapper>
  );
}

type StylesProps = {
  height: number
};

const StyledWrapper = styled.div<StylesProps>`

  .animation-content {
    overflow: hidden;
    background-color: #fff;
  }

  .anima {

    &-enter {
      height: 0;
    }

    &-enter-active {
      height: ${props => props.height}px;
      transition: all 300ms; 
    }

    &-enter-done {
      height: ${props => props.height}px;
    }

    &-exit {
      height: ${props => props.height}px;
    }

    &-exit-active {
      height: 0;
      transition: all 300ms; 
    }
  }


`;
