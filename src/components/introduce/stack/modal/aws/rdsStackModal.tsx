import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const RdsStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl label="RDS" labelBold contents={['환경 : MariaDB']} />
            </List>
        </Modal>
    );
};

export default RdsStackModal;
