import styled from '@emotion/styled';

import List from '../atoms/list';
import ContentWrapper from '../molecules/contentWrapper';
import Dropdown from '../molecules/drowndown';
import ListItemFormControl from '../molecules/listItemFormControl';

const Project = () => {
    return (
        <ContentWrapper label="💻 Project">
            <Wrapper>
                <Dropdown label="안전품질정보관리 서비스 (2022.04 ~ 2023.03)">
                    <List listStyleType="disc">
                        <ListItemFormControl
                            label="FrondEnd"
                            contents={[
                                'React, TypeScript를 사용했어요',
                                '상태관리로 Recoil을 활용했어요',
                                'StyledComponents를 사용하여 CSS를 적용했어요',
                                '컴포넌트 개발에 Atomic Design을 적용했어요',
                                '개발된 컴포넌트들을 문서화하기 위해 Storybook을 사용했어요',
                                '유효성 검증을 위해 React Hook Form과 Yup을 적용했어요',
                                'UseMemo, UseCallback을 이용하여 렌더링 최적화를 적용했어요',
                                'Lint, Prettier로 코드 포매팅, import/order 등을 적용했어요',
                                'Webpack을 이용하여 번들링을 하고있어요',
                            ]}
                        />

                        <ListItemFormControl
                            label="BackEnd"
                            contents={[
                                'SpringBoot, JPA를 사용했어요',
                                'QueryDSL을 활용하여 JPA 사용성을 높였어요',
                                'API를 문서화하기 위해 Swagger를 사용했어요',
                                'JWT를 이용하여 사용자 인증을 처리하고 있어요',
                            ]}
                        />

                        <ListItemFormControl
                            label="Devops"
                            contents={['GitLab과 Jenkins를 사용하여 CI/CD 파이프라인을 구축했어요']}
                        />

                        <ListItemFormControl
                            label="Cooperation"
                            contents={['Zeplin을 이용하여 디자이너와 소통했어요']}
                        />
                    </List>
                </Dropdown>

                <Dropdown label="품질개선관리 서비스 (Toy) (2021.04 ~ 2021.08)">
                    <List listStyleType="disc">
                        <ListItemFormControl
                            label="FrondEnd"
                            contents={[
                                'React, TypeScript를 사용했어요',
                                '상태관리로 Redux를 활용했어요',
                                'StyledComponents를 사용하여 CSS를 적용했어요',
                                'LazyLoading을 이용하여 렌더링 최적화를 적용했어요',
                                'Lint, Prettier로 코드 포매팅을 적용했어요',
                                'Webpack을 이용하여 번들링을 하고있어요',
                            ]}
                        />

                        <ListItemFormControl
                            label="BackEnd"
                            contents={[
                                'SpringBoot, MyBatis를 사용했어요',
                                'JWT를 이용하여 사용자 인증을 처리하고 있어요',
                            ]}
                        />

                        <ListItemFormControl label="Devops" contents={['GitLab으로 코드관리를 하고 있어요']} />
                    </List>
                </Dropdown>
            </Wrapper>
        </ContentWrapper>
    );
};

export default Project;

const Wrapper = styled.div``;
