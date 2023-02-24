import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const Ec2StackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="EC2"
                    labelBold
                    contents={[
                        'EC2를 이용하여 배포를 위한 Linux 서버를 생성할 수 있어요',
                        'EIP 및 VPC를 활용한 서버 설정들을 할 수 있어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default Ec2StackModal;
