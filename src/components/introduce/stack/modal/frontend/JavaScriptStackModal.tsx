import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const JavaScriptStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="JavaScript"
                    labelBold
                    contents={[
                        'Array 문법을 적극적으로 활용하고 있어요',
                        '비동기처리 방식으로 async/await을 선호해요',
                        '호이스팅, 이벤트루프 등에 대한 개념들을 알고 있어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default JavaScriptStackModal;
