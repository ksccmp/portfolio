import React from 'react';

import { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';

import theme from '@src/styles/theme';
import GlobalStyle from '@src/styles/globalStyles';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
