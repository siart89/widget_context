import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
};

const MiniContent: React.FC<Props> = props => {
  return (
    <StyledWrapper className={props.className}>
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
