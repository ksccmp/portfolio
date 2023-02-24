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
                    contents={[
                        'Lambda와 CloudWatch Logs를 활용하여 배치 서버를 만들어봤어요',
                        'GitLab을 활용하여 Lambda를 위한 CI/CD 파이프라인을 구축해봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default LambdaStackModal;
