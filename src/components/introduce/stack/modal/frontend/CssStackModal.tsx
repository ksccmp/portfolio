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
                    contents={[
                        '기본적인 CSS 속성 값들을 활용할 주 알아요',
                        'keyframes를 활용하여 animation을 구성할 수 있어요',
                        '디자인 요건을 전달받으면 동일하게 UI를 만들어 낼 수 있어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default CssStackModal;
