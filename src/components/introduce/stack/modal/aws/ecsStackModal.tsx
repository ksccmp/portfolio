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
                        'Cluster 환경 : EC2',
                        'Docker 이미지 관리 : ECR',
                        'Container 정의 : Task',
                        'Contianer 배포 설정 : Service',
                        '로드밸런서 : ALB',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default EcsStackModal;
