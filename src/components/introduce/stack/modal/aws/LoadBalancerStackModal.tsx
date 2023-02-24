import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const LoadBalancerStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="LoadBalancer"
                    labelBold
                    contents={[
                        'ECS를 사용할 때 ALB를 활용해봤어요',
                        'Private Subnet에서 인스턴스를 관리하기 위해 ALB를 사용해봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default LoadBalancerStackModal;
