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
                            label="테스트"
                            contents={['단위, 통합 테스트 : Jest, RTL', 'E2E 테스트 : Cypress']}
                        />

                        <ListItemFormControl label="모니터링" contents={['Sentry']} />
                    </TimingAnimation>
                </List>
            </Dropdown>
        </ContentWrapper>
    );
};

export default Plan;
