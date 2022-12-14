import React from 'react';

import Head from 'next/head';
import styled from '@emotion/styled';

import { getImage } from '@src/utils/getImage';
import Profile from '@src/components/introduce/profile';
import Text from '@src/components/atoms/text';
import Icon from '@src/components/atoms/icon';

const Index = () => {
    return (
        <>
            <Head>
                <title>김성찬의 포트폴리오</title>
            </Head>

            <Wrapper>
                <Header>
                    <Icon src={getImage('BACKGROUND')} width="100%" height="100%" />
                </Header>

                <IntroduceArticle>
                    <Profile />
                </IntroduceArticle>
            </Wrapper>
        </>
    );
};

export default Index;

const Wrapper = styled.div``;

const Header = styled.header`
    height: 328px;
`;

const IntroduceArticle = styled.article`
    width: 100%;
    max-width: 728px;

    margin: 0 auto;
`;
