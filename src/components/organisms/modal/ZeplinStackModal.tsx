import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const ZeplinStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="Zeplin"
                    labelBold
                    contents={[
                        'Zeplin을 통해 디자이너와 멘션을 작성하며 협업을 해봤어요',
                        'Zeplin에 만들어진 디자인을 이용하여 퍼블리싱을 해봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default ZeplinStackModal;
