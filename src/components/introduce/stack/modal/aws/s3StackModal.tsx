import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const S3StackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="S3"
                    labelBold
                    contents={['서비스에 사용되는 이미지 파일 관리', 'Lambda 배포 빌드 파일 관리']}
                />
            </List>
        </Modal>
    );
};

export default S3StackModal;
