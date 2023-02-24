import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const JenkinsStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="Jenkins"
                    labelBold
                    contents={['Git과 연동하여 CI/CD 파이프라인을 구축해봤어요']}
                />
            </List>
        </Modal>
    );
};

export default JenkinsStackModal;
