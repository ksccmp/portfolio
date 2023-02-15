import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const NextStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="Next"
                    labelBold
                    contents={[
                        'Next로 개발할 수 있는 초기 환경들을 구성할 수 있어요',
                        'Next에 TypeScript를 사용하여 개발하는 것을 선호해요',
                        'Data Fetching Prerendering을 적용할 수 있어요',
                        '함수형 컴포넌트를 사용하며 컴포넌트 생명주기 관리를 위해 Hook을 사용해요',
                        '상태관리로 Recoil, Redux 등을 사용해본 경험이 있어요',
                        '서버 상태관리를 위해 useQuery를 사용해봤어요',
                        'CSS-in-JS로 Emotion, StyledComponents를 활용하고 있어요',
                        'Atomic Design을 활용하여 컴포넌트 개발을 해봤어요',
                        '컴포넌트 문서화를 위해 Storybook을 사용해요',
                        'React Hook Form, Yup을 이용하여 유효성 검증을 해봤어요',
                        'UseMemo, UseCallback, Memo, LazyLoading, Code Spliting 등을 사용하여 렌더링 최적화를 할 수 있어요',
                        'Line, Prettier를 이용하여 코드 포매팅, import/order 등을 적용해봤어요',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default NextStackModal;
