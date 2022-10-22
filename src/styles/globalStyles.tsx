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
                    margin: 0;
                    padding: 0;

                    font-family: 'noto sans';
                }
            `}
        />
    );
};

export default GlobalStyle;
