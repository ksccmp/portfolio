import styled from '@emotion/styled';

import Career from '@src/components/introduce/career';
import Contact from '@src/components/introduce/contact';
import Education from '@src/components/introduce/education';
import Plan from '@src/components/introduce/plan';
import Profile from '@src/components/introduce/profile';
import Project from '@src/components/introduce/project';
import Stack from '@src/components/introduce/stack';
import { SCREEN } from '@src/utils/constant';

const Index = () => {
    return (
        <Wrapper>
            <IntroduceArticle>
                <Profile />
                <Career />
                <Project />
                <Stack />
                <Education />
                <Plan />
                <Contact />
            </IntroduceArticle>
        </Wrapper>
    );
};

export default Index;

const Wrapper = styled.div``;

const IntroduceArticle = styled.article`
    width: 100%;
    max-width: ${SCREEN.MOBILE}px;

    margin: 0 auto;
    padding: 11.2em 0;

    display: flex;
    flex-direction: column;
    gap: 64px;
`;
