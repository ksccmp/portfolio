import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Text from '@src/components/atoms/text';

interface Props {
    label: string;
    onClick?: () => void;
}

const TextBoxFormControl = (props: Props) => {
    return (
        <Wrapper onClick={props.onClick}>
            <Text color="grayscale100" size="large">
                {props.label}
            </Text>
        </Wrapper>
    );
};

export default TextBoxFormControl;

const Wrapper = styled.div`
    display: inline-block;

    min-width: 146px;

    padding: 4px 12px;

    border-radius: 6px;

    cursor: pointer;

    transition: 0.3s ease-out;

    ${(props) => css`
        border: 1px solid ${props.theme.color.grayscale40};

        &:hover {
            background-color: ${props.theme.color.skyblue20};
        }
    `}
`;
