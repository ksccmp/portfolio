import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const ConfluenceStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl label="Confluence" labelBold contents={['페이지를 활용하여 공유 문서 관리']} />
            </List>
        </Modal>
    );
};

export default ConfluenceStackModal;
