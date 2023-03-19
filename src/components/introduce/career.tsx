import List from '../atoms/list';
import ContentWrapper from '../molecules/contentWrapper';
import ListItemFormControl from '../molecules/listItemFormControl';
import TimingAnimation from '../molecules/timingAnimation';

const Career = () => {
    return (
        <ContentWrapper label="📚 Career">
            <List listStyleType="disc">
                <TimingAnimation>
                    <ListItemFormControl
                        label="SSAFY 2기 (2019.07 ~ 2020.02)"
                        contents={['1학기 성적 우수', '해외연수 수료']}
                    />
                </TimingAnimation>

                <TimingAnimation>
                    <ListItemFormControl
                        label="현대오토에버 (2020.03 ~ 현재)"
                        contents={[
                            '팀 내 서비스에 React 도입',
                            '팀 내 Devops Toolchain (GitLab, Jira, Confluence 등) 도입',
                            '팀 내 서비스에 GitLab - GitLab CI를 활용한 CI/CD 파이프라인 구축',
                        ]}
                    />
                </TimingAnimation>
            </List>
        </ContentWrapper>
    );
};

export default Career;
