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
                <ListItemFormControl
                    label="Confluence"
                    labelBold
                    contents={['업무처리하면서 팀원들과 공유가 필요한 내용들을 Confluence에 정리하고 있어요']}
                />
            </List>
        </Modal>
    );
};

export default ConfluenceStackModal;
