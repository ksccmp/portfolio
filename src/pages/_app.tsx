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
    const [title] = useState<string>('FE개발자 김성찬입니다.');
    const [description] = useState<string>('안녕하세요! FE개발자 김성찬의 포트폴리오입니다!');
    const [url] = useState<string>('https://ksc-portfolio.netlify.app');
    const [image] = useState<string>('https://ksc-portfolio.netlify.app/images/profile.jpg');

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
                {/* seo meta, base */}
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="keywords" content="포트폴리오, portfolio, fe developer" />
                <meta name="robots" content="index, follow" />

                {/* seo meta, opengraph */}
                <meta property="og:site_name" content="포트폴리오" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={image} />

                {/* seo meta, twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Head>

            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;
