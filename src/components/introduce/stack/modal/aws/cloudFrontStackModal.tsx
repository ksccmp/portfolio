import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const CloudFrontStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="CloudFront"
                    labelBold
                    contents={['원본 도메인 : ALB 활용', 'SSL : ACM 활용']}
                />
            </List>
        </Modal>
    );
};

export default CloudFrontStackModal;
