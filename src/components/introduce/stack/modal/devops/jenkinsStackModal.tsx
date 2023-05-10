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
                    contents={['CI/CD 파이프라인 활용', 'Build 후처리 : Publish Over SSH']}
                />
            </List>
        </Modal>
    );
};

export default JenkinsStackModal;
