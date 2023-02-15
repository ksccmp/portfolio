import { ReactNode, useEffect } from 'react';

import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { SCREEN } from '@src/utils/constant';

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Modal = (props: Props) => {
    /**
     * useEffect
     */
    useEffect(() => {
        window.addEventListener('click', handle.clickWindow);

        return () => {
            window.removeEventListener('click', handle.clickWindow);
        };
    }, []);

    /**
     * handle
     */
    const handle = {
        clickWindow: () => {
            props.onClose();
        },

        clickContainer: (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
        },
    };

    return (
        <Wrapper>
            <Container onClick={handle.clickContainer}>
                <ContentSection>{props.children}</ContentSection>
            </Container>
        </Wrapper>
    );
};

export default Modal;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    background-color: rgba(223, 225, 228, 0.5);

    margin: 0 auto;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1000;
`;

const containerKeyframes = keyframes`
    0% {
        width: 0;
        max-height: 0;
        padding: 0;
    }

    100% {
        width: ${SCREEN.FOLD}px;
        max-height: 92vh;
        padding: 20px;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    width: ${SCREEN.FOLD}px;
    max-height: 92vh;

    animation-name: ${containerKeyframes};
    animation-duration: 0.4s;
    animation-timing-function: ease-in;
`;

const ContentSection = styled.div`
    overflow: auto;

    flex: 1 0 auto;

    width: ${SCREEN.FOLD}px;
    max-height: 92vh;

    padding: 20px;

    ${(props) => css`
        background-color: ${props.theme.color.white};
    `}
`;
