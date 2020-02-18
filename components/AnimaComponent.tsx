import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

type Props = {
    isOpen: boolean,
}

const AnimaComponent: React.FC<Props> = (props) => {

    const [show, setShow] = useState(true);

    return (
        <StyledWrapper>
            <div className="header">
                <div className="header__top">im a header</div>
                <CSSTransition
                    in={show}
                    timeout={200}
                    unmountOnExit={true}
                    classNames="my-class"
                >
                <div className="header__min">i m a second part of header minimized</div>
                </CSSTransition>
            </div>
            <CSSTransition
                classNames="test"
                in={props.isOpen}
                timeout={300}
                unmountOnExit={true}
                onEnter={() => setShow(false)}
                onExiting={() => setShow(true)}
            >
                <div className="maxi">
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </CSSTransition>
        </StyledWrapper>
    )
};

const StyledWrapper = styled.section`
    max-width: 600px;
    margin: 0 auto;

    .header {

        &__top {
            border: 1px solid tomato;
        }

        &__min {
            background-color: #c9c8c7;
            height: 40px;
            display: flex;
            align-items: center;
            position: relative;
        }
    }

    .maxi {
        border: 1px solid gray;
        position: relative;
        overflow-y: hidden;
        height: auto;
    }

   

         .test-enter {
            height: 20px;
            opacity: 0;
        }

         .test-enter-active {
            opacity: 1;
            height: 200px;
            transition: opacity 300ms, height 300ms;
        }

         .test-exit {
            opacity: 1;
            height: 200px;
        }

         .test-exit-active {
            height: 20px;
            opacity: 0;
            transition: opacity 300ms, height 300ms;
        }


    .my-class {

        &-enter {
            opacity: 0;
            height: 0;
        }

        &-enter-active {
            opacity: 1;
            height: 40px;
            transition: all 200ms;
        }

        &-exit {
            opacity: 1;
        }

        &-exit-active {
            height: 0;
            opacity: 0;
            transition: all 200ms;
        }
    }
`;

export default AnimaComponent;