import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const JpaStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="JPA"
                    labelBold
                    contents={[
                        'ORM에 대한 개념을 알고 있어요',
                        'Entity에 대한 개념을 알고 있어요',
                        'Composite Key Entity 사용 방법을 알고 있어요',
                        '단방향, 양방향 연관관계를 사용할 수 있어요',
                        '조건절을 위한 Repository를 구성할 수 있어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default JpaStackModal;
