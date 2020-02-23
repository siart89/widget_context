import * as React from "react";
import styled from "styled-components";
import { useSpring, animated, useTransition } from "react-spring";
import useComponentSize from '@rehooks/component-size';

type Props = {
    isOpen: boolean,
    className?: string,
    calcheight?: (h: number) => void
};

const StyledWrapper = styled.div<Props>`
  display: flex;
  flex-flow: column;
  position: ${props => props.isOpen ? 'relative' : 'absolute'};
  top: ${props => props.isOpen ? 0 : "-10000px"};

  .maxi-content {
    &__row {
      padding: 5px 13px;
    }
  }
`;

const Test = styled(animated.div)`
    
`;

const MaxiContent: React.FC<Props> = props => {
    const myRef = React.useRef(null);

    const {width, height} = useComponentSize(myRef);

    // const transition = useTransition(props.isOpen, null, {
    //     from: { opacity: 0, height: 0 },
    //     enter: { opacity: 1, height: 112 },
    //     leave: { opacity: 0, height: 0 }
    // });
    
    React.useEffect(() => {
        props.calcheight(height)
    }, [height])

    return (
        <StyledWrapper
            ref={myRef}
            className={props.className}
            isOpen={props.isOpen}
        >
            <div className="maxi-content__row">
                Lorem ipsum dolor sit amet consectetur.
                        </div>
            <div className="maxi-content__row">Lorem, ipsum dolor.</div>
            <div className="maxi-content__row">Lorem ipsum dolor sit amet.</div>
            <div className="maxi-content__row">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
                        </div>
                        <div className="maxi-content__row">
                Lorem ipsum dolor sit amet consectetur.
                        </div>
            <div className="maxi-content__row">Lorem, ipsum dolor.</div>
            <div className="maxi-content__row">Lorem ipsum dolor sit amet.</div>
            <div className="maxi-content__row">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
                        </div>
                        <div className="maxi-content__row">
                Lorem ipsum dolor sit amet consectetur.
                        </div>
            <div className="maxi-content__row">Lorem, ipsum dolor.</div>
            <div className="maxi-content__row">Lorem ipsum dolor sit amet.</div>
            <div className="maxi-content__row">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
                        </div>
        </StyledWrapper>
    )
};

type StylesProps = {
    heightNum: number;
    isOpen: boolean;
};



export default MaxiContent;
