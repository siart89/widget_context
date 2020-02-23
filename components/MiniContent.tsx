import React, { useRef } from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  calcHeight: (h: number) => void,
};

const MiniContent: React.FC<Props> = props => {

  const myRef = React.useRef(null)
  
  React.useEffect(() => {
    console.log('miniHeight >>>',myRef.current.getBoundingClientRect().height)
    props.calcHeight(myRef.current.getBoundingClientRect().height);
  }, [])
  return (
    <StyledWrapper
      className={props.className}
      ref={myRef}
    >
      <div className="mini-content__row">
        <div className="mini-content__text">Lorem, ipsum.</div>
        <div className="mini-content__text">Lorem, ipsum.</div>
      </div>
      <div className="mini-content__row">
        <div className="mini-content__text">Lorem, ipsum.</div>
        <div className="mini-content__text">Lorem, ipsum.</div>
      </div>
      <div className="mini-content__row">
        <div className="mini-content__text">Lorem, ipsum.</div>
        <div className="mini-content__text">Lorem, ipsum.</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  .mini-content {
    &__row {
      display: flex;
      flex-flow: row;
    }

    &__text {
      font-size: 14px;
      line-height: 24px;
      flex-grow: 1;
    }
  }
`;

export default MiniContent;
