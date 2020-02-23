import * as React from "react";
import styled from "styled-components";
import MiniContent from "./MiniContent";
import { CSSTransition } from "react-transition-group";

type Props = {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
};

const Header: React.FC<Props> = props => {
  return (
    <StyledWrapper className={props.className}>
      <div className="header__row">
        <div className="header__title">Lorem.</div>
        <div className="header__text">Lorem, ipsum dolor.</div>
        <span className="header__info header__text">174$</span>
        <div className="header__button" onClick={props.onClick} />
      </div>
      {/* <CSSTransition
        in={props.isOpen}
        classNames="mini"
        unmountOnExit={true}
        timeout={220}
      >
        <div className="header__row">
          <MiniContent />
        </div>
      </CSSTransition> */}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 16px;
  border-top: 1px solid black;

  .mini {
    &-enter {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }

    &-enter-active {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transition: all 300ms;
    }

    &-exit {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    &-exit-active {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
      transition: all 300ms;
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
