import { ReactNode } from 'react';

import styled from '@emotion/styled';

import Title from '@src/components/atoms/title';

import TimingAnimation from './timingAnimation';

interface Props {
    label: string;
    children: ReactNode;
}

const ContentWrapper = (props: Props) => {
    return (
        <Wrapper>
            <Header>
                <TimingAnimation>
                    <Title color="grayscale90" size="2xLarge" weight="bold">
                        {props.label}
                    </Title>
                </TimingAnimation>
            </Header>

            <Body>{props.children}</Body>
        </Wrapper>
    );
};

export default ContentWrapper;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Header = styled.header``;

const Body = styled.article``;
