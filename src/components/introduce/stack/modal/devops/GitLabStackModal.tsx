import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const GitLabStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="GitLab"
                    labelBold
                    contents={[
                        'Add, Commit, Pull, Push 등에 대한 기본적인 개념을 바탕으로 코드 관리를 할 수 있어요',
                        'Branch 전략을 세워 Sprint 단위별 업무처리를 진행하고 있어요',
                        '개발이 완료된 코드를 PR을 통해 코드리뷰도 해봤어요',
                        'GitLab CI와 GitLab Runner를 이용하여 CI/CD 파이프라인을 구축할 수 잇어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default GitLabStackModal;
