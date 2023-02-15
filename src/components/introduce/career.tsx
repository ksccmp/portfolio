import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Text from '../atoms/text';
import ContentWrapper from '../molecules/introduce/contentWrapper';

const Career = () => {
    return (
        <ContentWrapper label="📚 Career">
            <TextList>
                <TextItem>
                    <Text color="grayscale80" size="xLarge">
                        SSAFY 2기 (2019.07 ~ 2020.02)
                    </Text>

                    <TextList listStyleType="circle">
                        <TextItem>
                            <Text color="grayscale60" size="large">
                                1학기 성적 우수
                            </Text>
                        </TextItem>

                        <TextItem>
                            <Text color="grayscale60" size="large">
                                해외연수 수료
                            </Text>
                        </TextItem>
                    </TextList>
                </TextItem>

                <TextItem>
                    <Text color="grayscale80" size="xLarge">
                        현대오토에버 (2020.03 ~ 현재)
                    </Text>

                    <TextList listStyleType="circle">
                        <TextItem>
                            <Text color="grayscale60" size="large">
                                팀 내 서비스에 React 도입
                            </Text>
                        </TextItem>

                        <TextItem>
                            <Text color="grayscale60" size="large">
                                팀 내 Devops Toolchain (GitLab, Jenkins, Confluence 등) 도입
                            </Text>
                        </TextItem>
                    </TextList>
                </TextItem>
            </TextList>
        </ContentWrapper>
    );
};

export default Career;

const TextList = styled.ul<{ listStyleType?: 'disc' | 'circle' }>`
    padding-left: 24px;

    ${(props) => css`
        list-style-type: ${props.listStyleType ?? 'disc'};
    `}
`;

const TextItem = styled.li`
    padding: 4px 0;
`;
