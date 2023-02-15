import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@src/styles/theme';

interface Props {
    color?: keyof typeof theme.color;
    size?: keyof typeof theme.font.size;
    weight?: keyof typeof theme.font.weight;
    decoration?: 'underline';
}

const Span = styled.span<Props>`
    word-break: keep-all;

    letter-spacing: -0.64px;
    line-height: 1.43;

    ${(props) => {
        if (props.color) {
            return css`
                color: ${props.theme.color[props.color]};
            `;
        }
    }}

    ${(props) => {
        if (props.size) {
            return css`
                font-size: ${props.theme.font.size[props.size]};
            `;
        }
    }}

    ${(props) => {
        if (props.weight) {
            return css`
                font-weight: ${props.theme.font.weight[props.weight]};
            `;
        }
    }}

    ${(props) => {
        if (props.decoration) {
            return css`
                text-decoration: ${props.decoration};
            `;
        }
    }}
`;

export default Span;
