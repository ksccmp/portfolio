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
                        'Query처리 : QueryDSL',
                        'Procedure처리 : JPARepository',
                        '복합키 : IdClass',
                        '연관관계 : OneToOne, OneToMany, ManyToOne',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default JpaStackModal;
