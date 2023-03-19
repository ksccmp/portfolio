import List from '../atoms/list';
import ContentWrapper from '../molecules/contentWrapper';
import Dropdown from '../molecules/drowndown';
import ListItemFormControl from '../molecules/listItemFormControl';
import TimingAnimation from '../molecules/timingAnimation';

const Plan = () => {
    return (
        <ContentWrapper label="🚀 Plan">
            <Dropdown label="FrondEnd">
                <List listStyleType="disc">
                    <TimingAnimation>
                        <ListItemFormControl
                            label="단위 테스트"
                            contents={[
                                'Jest와 RTL을 이용한 단위 테스트에 대해 공부할 계획에 있어요',
                                'Cypress를 이용한 E2E 테스트도 알아보려고 해요',
                            ]}
                        />
                    </TimingAnimation>

                    <TimingAnimation>
                        <ListItemFormControl
                            label="SSR"
                            contents={[
                                'Next의 SSR에 대해 공부할 계획에 있어요',
                                'SSR, SSG, Dynamic Routes, ISR 등에 대해 알아보려고 해요',
                            ]}
                        />
                    </TimingAnimation>
                </List>
            </Dropdown>
        </ContentWrapper>
    );
};

export default Plan;
