import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const CssStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="CSS"
                    labelBold
                    contents={['디자인과 동일한 CSS 적용', 'Animation 처리', 'SCSS']}
                />
            </List>
        </Modal>
    );
};

export default CssStackModal;
