import { ReactNode, useEffect, useRef, useState } from 'react';

import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
    children: ReactNode;
}

const TimingAnimation = (props: Props) => {
    /**
     * useState
     */
    const [observe, setObserve] = useState<boolean>(false);

    /**
     * useRef
     */
    const observerRef = useRef<IntersectionObserver>();
    const wrapperRef = useRef<HTMLDivElement>(null);

    /**
     * intersectionObserverConfig
     */
    const intersectionObserverConfig = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                io.unobserve(entry.target);
                const time = Math.random();

                setTimeout(() => {
                    setObserve(true);
                }, time * 500);
            }
        });
    };

    /**
     * useEffect
     */
    useEffect(() => {
        observerRef.current = new IntersectionObserver(intersectionObserverConfig);
        wrapperRef.current && observerRef.current.observe(wrapperRef.current);
    }, []);

    return (
        <Wrapper ref={wrapperRef} observe={observe}>
            {props.children}
        </Wrapper>
    );
};

export default TimingAnimation;

const wrapperKeyframes = keyframes`
    0% {
        transform: translateY(24px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const Wrapper = styled.div<{ observe: boolean }>`
    ${(props) => {
        if (props.observe) {
            return css`
                animation-name: ${wrapperKeyframes};
                animation-duration: 0.8s;
                animation-timing-function: ease-out;

                visibility: visible;
            `;
        } else {
            return css`
                visibility: hidden;
            `;
        }
    }}
`;
