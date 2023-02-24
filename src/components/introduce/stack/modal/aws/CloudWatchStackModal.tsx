import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const CloudWatchStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="CloudWatch"
                    labelBold
                    contents={[
                        'Lambda를 이용하여 배치를 만들때 CloudWatch Logs를 활용해봤어요',
                        'CloudWatch, Lambda를 활용하여 서비스 중인 서버에 메모리, 디스크 등의 문제가 발생될 때 Slack에 알림이 가는 기능을 구현해봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default CloudWatchStackModal;
