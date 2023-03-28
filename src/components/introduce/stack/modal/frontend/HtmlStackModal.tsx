import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const HtmlStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="HTML"
                    labelBold
                    contents={['목적에 맞는 마크업 문법 처리', '시맨틱 태그', '메타 태그 활용']}
                />
            </List>
        </Modal>
    );
};

export default HtmlStackModal;
