import List from '../atoms/list';
import Dropdown from '../molecules/drowndown';
import ContentWrapper from '../molecules/introduce/contentWrapper';
import ListItemFormControl from '../molecules/introduce/listItemFormControl';

const Plan = () => {
    return (
        <ContentWrapper label="🚀 Plan">
            <Dropdown label="FrondEnd">
                <List listStyleType="disc">
                    <ListItemFormControl
                        label="단위 테스트"
                        contents={[
                            'Jest와 RTL을 이용한 단위 테스트에 대해 공부할 계획에 있어요',
                            'Cypress를 이용한 E2E 테스트도 알아보려고 해요',
                        ]}
                    />

                    <ListItemFormControl
                        label="SSR"
                        contents={[
                            'Next의 SSR에 대해 공부할 계획에 있어요',
                            'SSR, SSG, Dynamic Routes, ISR 등에 대해 알아보려고 해요',
                        ]}
                    />
                </List>
            </Dropdown>
        </ContentWrapper>
    );
};

export default Plan;
