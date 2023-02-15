import { useEffect, useState } from 'react';

import { Theme, ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import _useResize from '@src/modules/customHook/useResize';
import GlobalStyle from '@src/styles/globalStyles';
import _theme from '@src/styles/theme';
import { SCREEN } from '@src/utils/constant';

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
        <>
            <Head>
                <title>FE개발자 김성찬입니다.</title>
            </Head>

            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;
