import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const DockerStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="Docker"
                    labelBold
                    contents={[
                        'Image, Container에 대한 개념을 이해하고 있어요',
                        'Dockerfile을 이용하여 원하는 Image를 만들고 Deploy서버에 Container를 생성하여 서비스 배포를 할 수 있어요',
                        'GitLab과 같은 CI/CD 파이프라인을 구축할 때 Docker를 활용해봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default DockerStackModal;
