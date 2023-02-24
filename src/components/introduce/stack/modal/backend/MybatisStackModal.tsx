import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const MybatisStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="Mybatis"
                    labelBold
                    contents={[
                        'Mybatis에서 변수를 활용할 수 있어요',
                        '반복문과 조건문 등을 이용하여 효율적인 쿼리를 작성해본적이 있어요',
                        'include를 활용하여 자주 사용되는 쿼리를 재사용해봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default MybatisStackModal;
