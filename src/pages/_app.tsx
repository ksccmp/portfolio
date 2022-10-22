import React, { useEffect, useState } from 'react';

import { AppProps } from 'next/app';
import { Theme, ThemeProvider } from '@emotion/react';

import { SCREEN } from '@src/utils/constant';
import _theme from '@src/styles/theme';
import GlobalStyle from '@src/styles/globalStyles';
import _useResize from '@src/modules/customHook/useResize';

const App = ({ Component, pageProps }: AppProps) => {
    /**
     * customHook
     */
    const useResize = _useResize();

    /**
     * useState
     */
    const [theme, setTheme] = useState<Theme>(_theme);

    /**
     * useEffect
     */
    useEffect(() => {
        if (useResize.innerWidth > 0) {
            if (useResize.innerWidth < SCREEN.FOLD) {
                setTheme({
                    ...theme,
                    screen: {
                        fold: true,
                        mobile: false,
                        desktop: false,
                    },
                });
            } else if (useResize.innerWidth < SCREEN.MOBILE) {
                setTheme({
                    ...theme,
                    screen: {
                        fold: false,
                        mobile: true,
                        desktop: false,
                    },
                });
            } else {
                setTheme({
                    ...theme,
                    screen: {
                        fold: false,
                        mobile: false,
                        desktop: true,
                    },
                });
            }
        }
    }, [useResize.innerWidth]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
