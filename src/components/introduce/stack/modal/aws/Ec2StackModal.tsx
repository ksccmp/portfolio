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
                    contents={['서버 OS : Ubuntu, AWS Linux', 'Public IP : EIP', '보안그룹 : VPC']}
                />
            </List>
        </Modal>
    );
};

export default Ec2StackModal;
