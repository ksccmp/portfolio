import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const EcsStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="ECS"
                    labelBold
                    contents={[
                        'EC2환경을 활용한 ECS Cluster를 설정해봤어요',
                        'ECR을 이용하여 배포에 사용될 Docker Image를 관리할 수 있어요',
                        'Task에서는 ECR에 올린 Docker Image를 활용하여 생성할 Container를 정의해봤어요',
                        'ECS Cluster를 생성한 뒤 Service를 이용하여 Container 배포 방식을 설정해봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default EcsStackModal;
