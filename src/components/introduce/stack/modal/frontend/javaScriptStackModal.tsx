import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const JavaScriptStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="JavaScript"
                    labelBold
                    contents={[
                        '기본 데이터 타입 : Number, String 등',
                        '비동기 : Async/Await, Promise',
                        '함수 작성 : 함수 표현식',
                        '호이스팅',
                        '이벤트루프',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default JavaScriptStackModal;
