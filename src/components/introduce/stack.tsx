import styled from '@emotion/styled';

import List from '../atoms/list';
import Dropdown from '../molecules/drowndown';
import ContentWrapper from '../molecules/introduce/contentWrapper';
import ListItemFormControl from '../molecules/introduce/listItemFormControl';

const Stack = () => {
    return (
        <ContentWrapper label="🛠️ Stack">
            <Wrapper>
                <Dropdown label="FrondEnd">
                    <List listStyleType="disc">
                        <ListItemFormControl label="React" />
                        <ListItemFormControl label="Next" />
                        <ListItemFormControl label="TypeScript" />
                        <ListItemFormControl label="JavaScript" />
                        <ListItemFormControl label="HTML" />
                        <ListItemFormControl label="CSS" />
                    </List>
                </Dropdown>

                <Dropdown label="BackEnd" open={false}>
                    <List listStyleType="disc">
                        <ListItemFormControl label="SpringBoot" />
                        <ListItemFormControl label="JPA" />
                        <ListItemFormControl label="QueryDSL" />
                        <ListItemFormControl label="MyBatis" />
                    </List>
                </Dropdown>

                <Dropdown label="Devops">
                    <List listStyleType="disc">
                        <ListItemFormControl label="GitLab" />
                        <ListItemFormControl label="Docker" />
                        <ListItemFormControl label="GitLab Runner" />
                        <ListItemFormControl label="Jira" />
                        <ListItemFormControl label="Confluence" />
                        <ListItemFormControl label="Jenkins" />
                    </List>
                </Dropdown>

                <Dropdown label="AWS">
                    <List listStyleType="disc">
                        <ListItemFormControl label="EC2" />
                        <ListItemFormControl label="Lambda" />
                        <ListItemFormControl label="ECS" />
                        <ListItemFormControl label="ALB" />
                        <ListItemFormControl label="S3" />
                        <ListItemFormControl label="CloudWatch" />
                        <ListItemFormControl label="RDS" />
                    </List>
                </Dropdown>

                <Dropdown label="Cooperation">
                    <List listStyleType="disc">
                        <ListItemFormControl label="Zeplin" />
                        <ListItemFormControl label="Slack" />
                    </List>
                </Dropdown>
            </Wrapper>
        </ContentWrapper>
    );
};

export default Stack;

const Wrapper = styled.div``;
