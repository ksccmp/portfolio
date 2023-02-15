import { ReactNode, useEffect } from 'react';

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
     * 이벤트 핸들러
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
            <Container onClick={handle.clickContainer}>{props.children}</Container>
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

const Container = styled.div`
    padding: 20px;

    overflow: auto;

    max-width: ${SCREEN.MOBILE}px;
`;
