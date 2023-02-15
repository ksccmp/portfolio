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
                    contents={[
                        '기본적인 HTML 마크업 문법을 활용할 수 있어요',
                        '개발요건에 필요한 마크업 문법을 선택 및 활용하여 UI를 구성할 수 있어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default HtmlStackModal;
