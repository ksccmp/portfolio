import styled from '@emotion/styled';

import List from '../atoms/list';
import ContentWrapper from '../molecules/contentWrapper';
import Dropdown from '../molecules/drowndown';
import ListItemFormControl from '../molecules/listItemFormControl';
import TimingAnimation from '../molecules/timingAnimation';

const Project = () => {
    return (
        <ContentWrapper label="💻 Project">
            <Wrapper>
                <Dropdown label="안전품질정보관리 서비스 (22.04 ~ 23.03)">
                    <List listStyleType="disc">
                        <TimingAnimation>
                            <ListItemFormControl
                                label="FrondEnd"
                                contents={[
                                    '주요기술 : React, TypeScript',
                                    '상태관리 : Recoil',
                                    'CSS : StyledComponents',
                                    '컴포넌트 디자인 : Atomic Design',
                                    '컴포넌트 문서화 : Storybook',
                                    '유효성 검증 : React Hook Form, Yup',
                                    '번들러 : Webpack',
                                    '컨벤션 : ESLint, Prettier',
                                    '성능측정 : Lighthouse',
                                    '최적화 : 불필요한 렌더링 개선 (Lighthouse TTI 8초 → 4초), 메모이제이션 (useMemo), CodeSpliting, LazyLoading',
                                ]}
                            />
                        </TimingAnimation>

                        <TimingAnimation>
                            <ListItemFormControl
                                label="BackEnd"
                                contents={[
                                    '주요기술 : SpringBoot, JPA, QueryDSL',
                                    'API 문서화 : Swagger',
                                    '인증방식 : JWT',
                                    '컨벤션 : IntelliJ',
                                ]}
                            />
                        </TimingAnimation>

                        <TimingAnimation>
                            <ListItemFormControl
                                label="Devops"
                                contents={['코드관리 : GitLab', '배포 자동화 : Jenkins']}
                            />
                        </TimingAnimation>

                        <TimingAnimation>
                            <ListItemFormControl label="Cooperation" contents={['디자인 도구 : Zeplin']} />
                        </TimingAnimation>
                    </List>
                </Dropdown>

                <Dropdown label="품질개선관리 서비스 (Toy, 21.04 ~ 21.08)">
                    <List listStyleType="disc">
                        <TimingAnimation>
                            <ListItemFormControl
                                label="FrondEnd"
                                contents={[
                                    '주요기술 : React, TypeScript',
                                    '상태관리 : Redux',
                                    'CSS : StyledComponents',
                                    '번들러 : Webpack',
                                    '컨벤션 : ESLint, Prettier',
                                    '최적화 : LazyLoading',
                                ]}
                            />
                        </TimingAnimation>

                        <TimingAnimation>
                            <ListItemFormControl
                                label="BackEnd"
                                contents={['주요기술 : SpringBoot, MyBatis', '인증방식 : JWT']}
                            />
                        </TimingAnimation>

                        <TimingAnimation>
                            <ListItemFormControl label="Devops" contents={['코드관리 : GitLab']} />
                        </TimingAnimation>
                    </List>
                </Dropdown>
            </Wrapper>
        </ContentWrapper>
    );
};

export default Project;

const Wrapper = styled.div``;
