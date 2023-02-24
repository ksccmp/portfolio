import styled from '@emotion/styled';

import { _useModal } from '@src/modules/customHook/useModal';

import ContentWrapper from '../molecules/contentWrapper';
import Dropdown from '../molecules/drowndown';
import TextBoxFormControl from '../molecules/textBoxFormControl';
import ConfluenceStackModal from '../organisms/modal/ConfluenceStackModal';
import CssStackModal from '../organisms/modal/CssStackModal';
import DockerStackModal from '../organisms/modal/DockerStackModal';
import Ec2StackModal from '../organisms/modal/Ec2StackModal';
import EcsStackModal from '../organisms/modal/EcsStackModal';
import GitLabStackModal from '../organisms/modal/GitLabStackModal';
import HtmlStackModal from '../organisms/modal/HtmlStackModal';
import JavaScriptStackModal from '../organisms/modal/JavaScriptStackModal';
import JenkinsStackModal from '../organisms/modal/JenkinsStackModal';
import JiraStackModal from '../organisms/modal/JiraStackModal';
import JpaStackModal from '../organisms/modal/JpaStackModal';
import LambdaStackModal from '../organisms/modal/LambdaStackModal';
import MybatisStackModal from '../organisms/modal/MybatisStackModal';
import NextStackModal from '../organisms/modal/NextStackModal';
import QueryDslStackModal from '../organisms/modal/QueryDslStackModal';
import ReactStackModal from '../organisms/modal/ReactStackModal';
import SpringBootStackModal from '../organisms/modal/SpringBootStackModal';
import TypeScriptStackModal from '../organisms/modal/TypeScriptStackModal';

const Stack = () => {
    // FrontEnd
    const REACT_STACK_MODAL = 'REACT_STACK_MODAL';
    const NEXT_STACK_MODAL = 'NEXT_STACK_MODAL';
    const TYPESCRIPT_STACK_MODAL = 'TYPESCRIPT_STACK_MODAL';
    const JAVASCRIPT_STACK_MODAL = 'JAVASCRIPT_STACK_MODAL';
    const HTML_STACK_MODAL = 'HTML_STACK_MODAL';
    const CSS_STACK_MODAL = 'CSS_STACK_MODAL';

    // BackEnd
    const SPRINGBOOT_STACK_MODAL = 'SPRINGBOOT_STACK_MODAL';
    const JPA_STACK_MODAL = 'JPA_STACK_MODAL';
    const QUERYDSL_STACK_MODAL = 'QUERYDSL_STACK_MODAL';
    const MYBATIS_STACK_MODAL = 'MYBATIS_STACK_MODAL';

    // Devops
    const GITLAB_STACK_MODAL = 'GITLAB_STACK_MODAL';
    const DOCKER_STACK_MODAL = 'DOCKER_STACK_MODAL';
    const JIRA_STACK_MODAL = 'JIRA_STACK_MODAL';
    const CONFLUENCE_STACK_MODAL = 'CONFLUENCE_STACK_MODAL';
    const JENKINS_STACK_MODAL = 'JENKINS_STACK_MODAL';

    // AWS
    const EC2_STACK_MODAL = 'EC2_STACK_MODAL';
    const LAMBDA_STACK_MODAL = 'LAMBDA_STACK_MODAL';
    const ECS_STACK_MODAL = 'ECS_STACK_MODAL';

    /**
     * customHook
     */
    const useModal = _useModal();

    return (
        <>
            <ContentWrapper label="🛠️ Stack">
                <Dropdown label="FrondEnd">
                    <Container>
                        <TextBoxFormControl label="React" onClick={() => useModal.open(REACT_STACK_MODAL)} />
                        <TextBoxFormControl label="Next" onClick={() => useModal.open(NEXT_STACK_MODAL)} />
                        <TextBoxFormControl label="TypeScript" onClick={() => useModal.open(TYPESCRIPT_STACK_MODAL)} />
                        <TextBoxFormControl label="JavaScript" onClick={() => useModal.open(JAVASCRIPT_STACK_MODAL)} />
                        <TextBoxFormControl label="HTML" onClick={() => useModal.open(HTML_STACK_MODAL)} />
                        <TextBoxFormControl label="CSS" onClick={() => useModal.open(CSS_STACK_MODAL)} />
                    </Container>
                </Dropdown>

                <Dropdown label="BackEnd" open={false}>
                    <Container>
                        <TextBoxFormControl label="SpringBoot" onClick={() => useModal.open(SPRINGBOOT_STACK_MODAL)} />
                        <TextBoxFormControl label="JPA" onClick={() => useModal.open(JPA_STACK_MODAL)} />
                        <TextBoxFormControl label="QueryDSL" onClick={() => useModal.open(QUERYDSL_STACK_MODAL)} />
                        <TextBoxFormControl label="Mybatis" onClick={() => useModal.open(MYBATIS_STACK_MODAL)} />
                    </Container>
                </Dropdown>

                <Dropdown label="Devops">
                    <Container>
                        <TextBoxFormControl label="GitLab" onClick={() => useModal.open(GITLAB_STACK_MODAL)} />
                        <TextBoxFormControl label="Docker" onClick={() => useModal.open(DOCKER_STACK_MODAL)} />
                        <TextBoxFormControl label="Jira" onClick={() => useModal.open(JIRA_STACK_MODAL)} />
                        <TextBoxFormControl label="Confluence" onClick={() => useModal.open(CONFLUENCE_STACK_MODAL)} />
                        <TextBoxFormControl label="Jenkins" onClick={() => useModal.open(JENKINS_STACK_MODAL)} />
                    </Container>
                </Dropdown>

                <Dropdown label="AWS">
                    <Container>
                        <TextBoxFormControl label="EC2" onClick={() => useModal.open(EC2_STACK_MODAL)} />
                        <TextBoxFormControl label="Lambda" onClick={() => useModal.open(LAMBDA_STACK_MODAL)} />
                        <TextBoxFormControl label="ECS" onClick={() => useModal.open(ECS_STACK_MODAL)} />
                        <TextBoxFormControl label="ALB" />
                        <TextBoxFormControl label="S3" />
                        <TextBoxFormControl label="CloudWatch" />
                        <TextBoxFormControl label="RDS" />
                    </Container>
                </Dropdown>

                <Dropdown label="Cooperation">
                    <Container>
                        <TextBoxFormControl label="Zeplin" />
                        <TextBoxFormControl label="Slack" />
                    </Container>
                </Dropdown>
            </ContentWrapper>

            {/* FrontEnd */}
            {useModal.isOpen(REACT_STACK_MODAL) && (
                <ReactStackModal onClose={() => useModal.close(REACT_STACK_MODAL)} />
            )}
            {useModal.isOpen(NEXT_STACK_MODAL) && <NextStackModal onClose={() => useModal.close(NEXT_STACK_MODAL)} />}
            {useModal.isOpen(TYPESCRIPT_STACK_MODAL) && (
                <TypeScriptStackModal onClose={() => useModal.close(TYPESCRIPT_STACK_MODAL)} />
            )}
            {useModal.isOpen(JAVASCRIPT_STACK_MODAL) && (
                <JavaScriptStackModal onClose={() => useModal.close(JAVASCRIPT_STACK_MODAL)} />
            )}
            {useModal.isOpen(HTML_STACK_MODAL) && <HtmlStackModal onClose={() => useModal.close(HTML_STACK_MODAL)} />}
            {useModal.isOpen(CSS_STACK_MODAL) && <CssStackModal onClose={() => useModal.close(CSS_STACK_MODAL)} />}

            {/* BackEnd */}
            {useModal.isOpen(SPRINGBOOT_STACK_MODAL) && (
                <SpringBootStackModal onClose={() => useModal.close(SPRINGBOOT_STACK_MODAL)} />
            )}
            {useModal.isOpen(JPA_STACK_MODAL) && <JpaStackModal onClose={() => useModal.close(JPA_STACK_MODAL)} />}
            {useModal.isOpen(QUERYDSL_STACK_MODAL) && (
                <QueryDslStackModal onClose={() => useModal.close(QUERYDSL_STACK_MODAL)} />
            )}
            {useModal.isOpen(MYBATIS_STACK_MODAL) && (
                <MybatisStackModal onClose={() => useModal.close(MYBATIS_STACK_MODAL)} />
            )}

            {/* Devops */}
            {useModal.isOpen(GITLAB_STACK_MODAL) && (
                <GitLabStackModal onClose={() => useModal.close(GITLAB_STACK_MODAL)} />
            )}
            {useModal.isOpen(DOCKER_STACK_MODAL) && (
                <DockerStackModal onClose={() => useModal.close(DOCKER_STACK_MODAL)} />
            )}
            {useModal.isOpen(JIRA_STACK_MODAL) && <JiraStackModal onClose={() => useModal.close(JIRA_STACK_MODAL)} />}
            {useModal.isOpen(CONFLUENCE_STACK_MODAL) && (
                <ConfluenceStackModal onClose={() => useModal.close(CONFLUENCE_STACK_MODAL)} />
            )}
            {useModal.isOpen(JENKINS_STACK_MODAL) && (
                <JenkinsStackModal onClose={() => useModal.close(JENKINS_STACK_MODAL)} />
            )}

            {/* AWS */}
            {useModal.isOpen(EC2_STACK_MODAL) && <Ec2StackModal onClose={() => useModal.close(EC2_STACK_MODAL)} />}
            {useModal.isOpen(LAMBDA_STACK_MODAL) && (
                <LambdaStackModal onClose={() => useModal.close(LAMBDA_STACK_MODAL)} />
            )}
            {useModal.isOpen(ECS_STACK_MODAL) && <EcsStackModal onClose={() => useModal.close(ECS_STACK_MODAL)} />}
        </>
    );
};

export default Stack;

const Container = styled.div`
    padding: 6px;

    & > div {
        margin: 6px;
    }
`;
