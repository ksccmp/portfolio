import styled from '@emotion/styled';

import { _useModal } from '@src/modules/customHook/useModal';

import ContentWrapper from '../molecules/contentWrapper';
import Dropdown from '../molecules/drowndown';
import TextBoxFormControl from '../molecules/textBoxFormControl';
import CssStackModal from '../organisms/modal/CssStackModal';
import HtmlStackModal from '../organisms/modal/HtmlStackModal';
import JavaScriptStackModal from '../organisms/modal/JavaScriptStackModal';
import NextStackModal from '../organisms/modal/NextStackModal';
import ReactStackModal from '../organisms/modal/ReactStackModal';
import SpringBootStackModal from '../organisms/modal/SpringBootStackModal';
import TypeScriptStackModal from '../organisms/modal/TypeScriptStackModal';

const Stack = () => {
    const REACT_STACK_MODAL = 'REACT_STACK_MODAL';
    const NEXT_STACK_MODAL = 'NEXT_STACK_MODAL';
    const TYPESCRIPT_STACK_MODAL = 'TYPESCRIPT_STACK_MODAL';
    const JAVASCRIPT_STACK_MODAL = 'JAVASCRIPT_STACK_MODAL';
    const HTML_STACK_MODAL = 'HTML_STACK_MODAL';
    const CSS_STACK_MODAL = 'CSS_STACK_MODAL';
    const SPRINGBOOT_STACK_MODAL = 'SPRINGBOOT_STACK_MODAL';

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
