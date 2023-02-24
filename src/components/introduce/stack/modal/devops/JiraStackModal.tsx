import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const JiraStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="Jira"
                    labelBold
                    contents={[
                        '팀원들과 Jira를 이용하여 Issue를 관리하여 협업을 해봤어요',
                        'Git과 Jira를 연동해서도 사용해봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default JiraStackModal;
