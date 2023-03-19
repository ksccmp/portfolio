import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const SpringBootStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="SpringBoot"
                    labelBold
                    contents={[
                        '비즈니스 구성 : Controller, Service, Repository',
                        '재사용 : Interceptor, Filter, AOP',
                        'API 문서화 : Swagger',
                        '객체 변환 : MapStruct',
                        '인증방식 : JWT',
                        '로그, 캡슐화 : Lombok',
                        '암호화 : AES, SHA',
                        '컨벤션 : IntelliJ',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default SpringBootStackModal;
