import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const LambdaStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="Lambda"
                    labelBold
                    contents={['배치서버 : CloudWatch Logs', 'API서버 : API Gateway', '자동화 : GitLab CI']}
                />
            </List>
        </Modal>
    );
};

export default LambdaStackModal;
