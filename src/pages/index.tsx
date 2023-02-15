import styled from '@emotion/styled';
import Head from 'next/head';

import Career from '@src/components/introduce/career';
import Education from '@src/components/introduce/education';
import Profile from '@src/components/introduce/profile';
import Project from '@src/components/introduce/project';
import Stack from '@src/components/introduce/stack';

const Index = () => {
    return (
        <>
            <Head>
                <title>김성찬의 포트폴리오</title>
            </Head>

            <Wrapper>
                <IntroduceArticle>
                    <Profile />
                    <Career />
                    <Project />
                    <Stack />
                    <Education />
                </IntroduceArticle>
            </Wrapper>
        </>
    );
};

export default Index;

const Wrapper = styled.div``;

const IntroduceArticle = styled.article`
    width: 100%;
    max-width: 728px;

    margin: 0 auto;
    padding: 11.2em 0;

    display: flex;
    flex-direction: column;
    gap: 64px;
`;
