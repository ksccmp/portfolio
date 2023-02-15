import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html>
            <Head>
                {/* 폰트 */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
                />

                {/* favicon */}
                <link rel="shortcut icon" href="/images/profile.jpg" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
