import List from '../atoms/list';
import ListItem from '../atoms/listItem';
import Text from '../atoms/text';
import ContentWrapper from '../molecules/introduce/contentWrapper';

const Career = () => {
    return (
        <ContentWrapper label="📚 Career">
            <List listStyleType="disc">
                <ListItem>
                    <Text color="grayscale80" size="xLarge">
                        SSAFY 2기 (2019.07 ~ 2020.02)
                    </Text>

                    <List listStyleType="circle">
                        <ListItem>
                            <Text color="grayscale60" size="large">
                                1학기 성적 우수
                            </Text>
                        </ListItem>

                        <ListItem>
                            <Text color="grayscale60" size="large">
                                해외연수 수료
                            </Text>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem>
                    <Text color="grayscale80" size="xLarge">
                        현대오토에버 (2020.03 ~ 현재)
                    </Text>

                    <List listStyleType="circle">
                        <ListItem>
                            <Text color="grayscale60" size="large">
                                팀 내 서비스에 React 도입
                            </Text>
                        </ListItem>

                        <ListItem>
                            <Text color="grayscale60" size="large">
                                팀 내 Devops Toolchain (GitLab, Jenkins, Confluence 등) 도입
                            </Text>
                        </ListItem>
                    </List>
                </ListItem>
            </List>
        </ContentWrapper>
    );
};

export default Career;
