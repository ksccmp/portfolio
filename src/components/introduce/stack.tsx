import styled from '@emotion/styled';

import { _useModal } from '@src/modules/customHook/useModal';

import ContentWrapper from '../molecules/contentWrapper';
import Dropdown from '../molecules/drowndown';
import TextBoxFormControl from '../molecules/textBoxFormControl';
import ReactStackModal from '../organisms/modal/ReactStackModal';

const Stack = () => {
    const REACT_STACK_MODAL = 'REACT_STACK_MODAL';

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
                        <TextBoxFormControl label="Next" />
                        <TextBoxFormControl label="TypeScript" />
                        <TextBoxFormControl label="JavaScript" />
                        <TextBoxFormControl label="HTML" />
                        <TextBoxFormControl label="CSS" />
                    </Container>
                </Dropdown>

                <Dropdown label="BackEnd" open={false}>
                    <Container>
                        <TextBoxFormControl label="SpringBoot" />
                        <TextBoxFormControl label="JPA" />
                        <TextBoxFormControl label="QueryDSL" />
                        <TextBoxFormControl label="MyBatis" />
                    </Container>
                </Dropdown>

                <Dropdown label="Devops">
                    <Container>
                        <TextBoxFormControl label="GitLab" />
                        <TextBoxFormControl label="Docker" />
                        <TextBoxFormControl label="GitLab Runner" />
                        <TextBoxFormControl label="Jira" />
                        <TextBoxFormControl label="Confluence" />
                        <TextBoxFormControl label="Jenkins" />
                    </Container>
                </Dropdown>

                <Dropdown label="AWS">
                    <Container>
                        <TextBoxFormControl label="EC2" />
                        <TextBoxFormControl label="Lambda" />
                        <TextBoxFormControl label="ECS" />
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

            {useModal.isOpen(REACT_STACK_MODAL) && (
                <ReactStackModal onClose={() => useModal.close(REACT_STACK_MODAL)} />
            )}
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
