import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const QueryDslStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="QueryDSL"
                    labelBold
                    contents={[
                        'JPA 환경에서 QueryDSL이 사용되는 것을 선호해요',
                        '상황별 조건절에 들어갈 문법에 대해 알고 있어요',
                        '서브쿼리, Join, 상수처리 등을 적용해봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default QueryDslStackModal;
