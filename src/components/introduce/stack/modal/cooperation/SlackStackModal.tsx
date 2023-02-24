import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const SlackStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="Slack"
                    labelBold
                    contents={[
                        'Slack을 이용해서 팀원들과 업무내용을 공유하고 소통을 해봤어요',
                        '서버에 문제가 발생될 때 메시지를 Slack에 받도록 해봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default SlackStackModal;
