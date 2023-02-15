import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
    listStyleType?: 'disc' | 'circle';
}

const List = styled.ul<Props>`
    padding-left: 24px;

    ${(props) => {
        if (props.listStyleType) {
            return css`
                list-style-type: ${props.listStyleType};
            `;
        }
    }}
`;

export default List;
