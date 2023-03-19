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
                        '도커라이징 : Dockerfile, Docker Image, Docker Container',
                        '파일 공유 : Volume',
                        'CI/CD 파이프라인 활용',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default DockerStackModal;
