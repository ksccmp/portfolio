import React from 'react';

import reset from 'emotion-reset';
import { css, Global } from '@emotion/react';

const GlobalStyle = () => {
    return (
        <Global
            styles={css`
                ${reset}

                *, *::before, *::after {
                    box-sizing: border-box;
                }

                body {
                    font-family: 'noto sans';
                }
            `}
        />
    );
};

export default GlobalStyle;
