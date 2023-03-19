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
                        '타입 정의 : interface, type',
                        'Union Type',
                        'Intersection Type',
                        'Type Assersion',
                        'Type Guard',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default TypeScriptStackModal;
