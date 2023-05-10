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
                        '컴포넌트 : 함수형 컴포넌트',
                        '컴포넌트 생명주기 관리 : Hook',
                        '컴포넌트 디자인 : Atomic Design',
                        '컴포넌트 문서화 : Storybook',
                        '렌더링 : CSR, SSR, SSG, Dynamic Routes, ISR',
                        'SEO : 이미지 Alt, Meta Tag 등',
                        '상태관리 : Recoil, Redux',
                        '서버 상태관리 : useQuery',
                        'CSS : Emotion, StyledComponents',
                        '유효성 검증 : React Hook Form, Yup',
                        '번들러 : Webpack',
                        '성능측정 : Lighthouse',
                        '최적화 : 불필요한 렌더링 개선, 메모이제이션 (useMemo, useCallback, React.Memo), CodeSpliting, LazyLoading',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default NextStackModal;
