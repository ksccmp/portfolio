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
                        'Spring의 핵심인 DI/IoC에 대한 개념을 알고 있어요',
                        'Controller-Service-Repository 형태의 비즈니스 로직을 구성할 수 있어요',
                        'Filter, Interceptor, AOP 등을 활용하여 재사용성을 높여봤어요',
                        'MapStruct를 이용해 Entity와 DTO 간 데이터 매핑을 해봤어요',
                        'JWT를 활용하여 사용자 인증 처리를 할 수 있어요',
                        'API 문서화를 위해 Swagger를 선호해요',
                        'Lombok을 이용하여 DTO 캡슐화 자동화, 로그처리 등을 하고 있어요',
                        'AES, SHA 등의 암호화 처리를 통해 중요 데이터 보안성을 높여봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default SpringBootStackModal;
