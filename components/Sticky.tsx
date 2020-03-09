import React, { useState, useEffect, useRef, useMemo } from 'react';
import styled, { css } from 'styled-components';

type Props = {
    top: number,
    indexZ?: number
}

const events = [
    "resize",
    "scroll",
    "touchstart",
    "touchmove",
    "touchend",
    "pageshow",
    "load"
];

const Sticky: React.FC<Props> = (props) => {

    const [isFix, setIsFix] = useState(false);
    const [height, setHeight] = useState(0);
    const boxRef = useRef(null);
    const innerRef = useRef(null);


    useEffect(() => {
        if (innerRef) {
            const h = innerRef.current.getBoundingClientRect().height
            setHeight(h);
        }
    }, [])


    useEffect(() => {
        const calc = () => {
            if (!boxRef) return;
            const { bottom, top, height } = boxRef.current.getBoundingClientRect();
            console.log('top==>>>', top);
            console.log("разность", top - props.top)
            if (top - props.top <= 0) {
                setIsFix(true)
            } else {
                setIsFix(false)
            }
        };

        events.forEach((event) => {
            window.addEventListener(event, calc);
        })
        return () => {
            events.forEach((event) => {
                window.removeEventListener(event, calc)
            })
        }
    }, [])


    return (
        <StyledWrapper
            isFix={isFix}
            top={props.top}
            ref={boxRef}
            height={height}
            indexZ={props.indexZ}
        >

            <div className="sticky__inner-wrapper" ref={innerRef}>
                {props.children}
            </div>
        </StyledWrapper>
    )
};

type StylesProps = {
    isFix: boolean,
    top: number,
    height: number,
    indexZ?: number,
}

const StyledWrapper = styled.div<StylesProps>`
    ${props => props.isFix && css`
        height: ${props.height}px;
    `}
    .sticky {
        &__inner-wrapper {
            max-width: 612px;
            width: 100%;
            ${props => props.isFix && css`
                position: fixed;
                top: 0;
                transform: translateY(${props.top}px);
                z-index: ${props.indexZ ? props.indexZ : 0}
            `}
        }
    }
`

export default Sticky;