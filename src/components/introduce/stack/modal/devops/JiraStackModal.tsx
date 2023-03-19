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
                    contents={['Board : Scrum, Kanban', '이슈관리 : Epic, Story, Task, SubTask', 'Git Commit 연동']}
                />
            </List>
        </Modal>
    );
};

export default JiraStackModal;
