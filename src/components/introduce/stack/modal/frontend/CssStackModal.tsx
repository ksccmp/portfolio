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
                    contents={['디자인 요건에 맞는 UI 개발', 'Animation 처리 : Keyframes, Transition', 'SCSS']}
                />
            </List>
        </Modal>
    );
};

export default CssStackModal;
