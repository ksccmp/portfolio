import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

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

                    font-family: 'Pretendard';
                }
            `}
        />
    );
};

export default GlobalStyle;
