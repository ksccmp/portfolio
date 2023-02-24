import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const TypeScriptStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="TypeScript"
                    labelBold
                    contents={[
                        '기본적인 데이터 타입을 알고 있어요',
                        'Union, Intersection Type 등을 활용할 수 있어요',
                        'Type Assersion, Type Guard 등을 사용할 주 알아요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default TypeScriptStackModal;
