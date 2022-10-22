import styled from '@emotion/styled';
import { css } from '@emotion/react';

import theme from '@src/styles/theme';

interface Props {
    color?: keyof typeof theme.color;
    size?: keyof typeof theme.font.size;
    weight?: keyof typeof theme.font.weight;
}

const Text = styled.span<Props>`
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
`;

export default Text;
