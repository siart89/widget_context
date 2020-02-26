import * as React from "react";
import styled from "styled-components";
import MiniContent from "./MiniContent";
import { CSSTransition } from "react-transition-group";
import useHeight from "../hooks/useHeight";

type Props = {
  className?: string;
  isOpen: boolean;
  height: number,
  minHeightCalc: (h: number) => void,
  onClick: () => void;
};

const Header: React.FC<Props> = props => {
  const myRef = React.useRef(null);

  const { height } = useHeight(myRef);

  console.log('header height ---------->>>>>', height);
  return (
    <StyledWrapper
      height={props.height}
      className={props.className}
      ref={myRef}
    >
      <div className="header__row">
        <div className="header__title">Lorem. {height}</div>
        <div className="header__text">Lorem, ipsum dolor.</div>
        <span className="header__info header__text">174$</span>
        <div className="header__button" onClick={props.onClick} />
      </div>
      <CSSTransition
        in={props.isOpen}
        classNames="mini"
        timeout={300}
      >
        <div className="header__row">
          <MiniContent
            calcHeight={props.minHeightCalc}
          />
        </div>
      </CSSTransition>
    </StyledWrapper>
  );
};

type StyledProps = {
  height: number,
}

const StyledWrapper = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  padding: 5px 16px;
  border-top: 1px solid black;

  .mini {
    &-enter {
      opacity: 0;
      height: 0;
      transform: translateY(-20%)
    }

    &-enter-active {
      opacity: 1;
      height: ${props => props.height}px;
      transform: translateY(0);
      transition: all 300ms;
      /* transition: transform 100ms; */
   
    }

    &-exit {
      transform: translateY(0);
      opacity: 1;
      height: ${props => props.height}px;
    }

    &-exit-active {
      transform: translateY(-20%);
      opacity: 0;
      height: 0;
      transition: all 300ms;
    }
    &-exit-done {
      opacity: 0;
      height: 0;
    }
  }

  .header {
    &__row {
      display: flex;
      flex-flow: row;
    }

    &__title {
      font-size: 14px;
      line-height: 24px;
      font-weight: 600;
      padding-right: 15px;
    }

    &__text {
      font-size: 14px;
      line-height: 24px;
    }

    &__info {
      margin-left: auto;
    }

    &__button {
      width: 20px;
      height: 20px;
      background-color: tomato;
      border-radius: 100%;
      margin-left: 40px;
      cursor: pointer;
    }
  }
`;

export default Header;
