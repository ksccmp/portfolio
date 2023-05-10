import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const MybatisStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl label="Mybatis" labelBold contents={['반복문, 조건문', '재사용 : Include']} />
            </List>
        </Modal>
    );
};

export default MybatisStackModal;
