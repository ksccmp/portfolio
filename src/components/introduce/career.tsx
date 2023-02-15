import List from '../atoms/list';
import ContentWrapper from '../molecules/introduce/contentWrapper';
import ListItemFormControl from '../molecules/introduce/listItemFormControl';

const Career = () => {
    return (
        <ContentWrapper label="📚 Career">
            <List listStyleType="disc">
                <ListItemFormControl
                    label="SSAFY 2기 (2019.07 ~ 2020.02)"
                    contents={['1학기 성적 우수', '해외연수 수료']}
                />

                <ListItemFormControl
                    label="현대오토에버 (2020.03 ~ 현재)"
                    contents={[
                        '팀 내 서비스에 React 도입',
                        '팀 내 Devops Toolchain (GitLab, Jenkins, Confluence 등) 도입',
                    ]}
                />
            </List>
        </ContentWrapper>
    );
};

export default Career;
