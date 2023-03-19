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
    };

    return (
        <Wrapper>
            <Container>
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
    padding: 0 12px;

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
        transform: translateY(42px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    max-height: 92vh;

    animation-name: ${containerKeyframes};
    animation-duration: 0.4s;

    ${(props) => {
        if (props.theme.screen.fold) {
            return css`
                width: 100%;
            `;
        } else {
            return css`
                width: ${SCREEN.FOLD}px;
            `;
        }
    }}
`;

const ContentSection = styled.div`
    overflow: auto;

    flex: 1 0 auto;

    max-height: 92vh;

    padding: 20px;

    border-radius: 20px;

    ${(props) => css`
        background-color: ${props.theme.color.white};
    `}

    ${(props) => {
        if (props.theme.screen.fold) {
            return css`
                width: 100%;
            `;
        } else {
            return css`
                width: ${SCREEN.FOLD}px;
            `;
        }
    }}
`;
