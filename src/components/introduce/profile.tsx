import styled from '@emotion/styled';

import { getImage } from '@src/utils/getImage';

import Image from '../atoms/image';
import Text from '../atoms/text';
import Title from '../atoms/title';

const Profile = () => {
    return (
        <Wrapper>
            <ImageSection>
                <Image src={getImage('PROFILE')} width={196} height={196} radius={8} />
            </ImageSection>

            <IntroduceSection>
                <IntroduceHeader>
                    <Title color="grayscale100" size="4xLarge" weight="bold">
                        김성찬, SeongChan Kim
                    </Title>

                    <TextList>
                        <TextItem>
                            <Text color="grayscale60" size="large">
                                안녕하세요! FE 개발자로 꾸준하고 가파르게 성장하는 것을 목표로 하고 있는 김성찬입니다.
                            </Text>
                        </TextItem>

                        <TextItem>
                            <Text color="grayscale60" size="large">
                                단 한줄의 코드도 다른 사람들이 이해할 수 있는 코드를 작성하려고 합니다.
                            </Text>
                        </TextItem>

                        <TextItem>
                            <Text color="grayscale60" size="large">
                                혼자하는 것보다 협업하면서 개발하는 것을 즐깁니다.
                            </Text>
                        </TextItem>
                    </TextList>
                </IntroduceHeader>
            </IntroduceSection>
        </Wrapper>
    );
};

export default Profile;

const Wrapper = styled.div`
    display: flex;
    gap: 64px;
`;

const ImageSection = styled.section``;

const IntroduceSection = styled.section``;

const IntroduceHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const TextList = styled.ul`
    list-style-type: disc;

    padding-left: 24px;
`;

const TextItem = styled.li`
    padding: 4px 0;

    & > p {
        display: inline;
    }
`;
