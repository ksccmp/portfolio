import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
    width?: number | string;
    height?: number | string;
    radius?: number | string;
}

const Image = styled.img<Props>`
    ${(props) => {
        switch (typeof props.width) {
            case 'number':
                return css`
                    width: ${props.width}px;
                `;

            case 'string':
                return css`
                    width: ${props.width};
                `;
        }
    }}

    ${(props) => {
        switch (typeof props.height) {
            case 'number':
                return css`
                    height: ${props.height}px;
                `;

            case 'string':
                return css`
                    height: ${props.height};
                `;
        }
    }}

    ${(props) => {
        switch (typeof props.radius) {
            case 'number':
                return css`
                    border-radius: ${props.radius}px;
                `;

            case 'string':
                return css`
                    border-radius: ${props.radius};
                `;
        }
    }}
`;

export default Image;
