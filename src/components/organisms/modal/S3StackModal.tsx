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
                    contents={[
                        '서비스에서 사용할 이미지 파일들을 관리하기 위해 S3를 사용해봤어요',
                        'Lambda에 배포될 빌드 파일들을 관리하는 용도로도 사용해봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default S3StackModal;
