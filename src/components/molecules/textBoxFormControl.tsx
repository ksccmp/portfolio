import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Text from '@src/components/atoms/text';

import TimingAnimation from './timingAnimation';

interface Props {
    label: string;
    onClick?: () => void;
}

const TextBoxFormControl = (props: Props) => {
    return (
        <Wrapper onClick={props.onClick}>
            <TimingAnimation>
                <Container>
                    <Text color="grayscale100" size="large">
                        {props.label}
                    </Text>
                </Container>
            </TimingAnimation>
        </Wrapper>
    );
};

export default TextBoxFormControl;

const Wrapper = styled.div`
    display: inline-block;

    min-width: 140px;
`;

const Container = styled.div`
    border-radius: 6px;

    cursor: pointer;

    transition: 0.3s ease-out;

    padding: 4px 12px;

    ${(props) => css`
        border: 1px solid ${props.theme.color.grayscale40};

        &:hover {
            background-color: ${props.theme.color.skyblue20};
        }
    `}
`;
