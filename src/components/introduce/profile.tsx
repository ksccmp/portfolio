import { css } from '@emotion/react';
import styled from '@emotion/styled';

import _useResize from '@src/modules/customHook/useResize';
import { getImage } from '@src/utils/getImage';

import Image from '../atoms/image';
import List from '../atoms/list';
import Title from '../atoms/title';
import ListItemFormControl from '../molecules/listItemFormControl';
import TimingAnimation from '../molecules/timingAnimation';

const Profile = () => {
    /**
     * customHook
     */
    const useResize = _useResize();

    return (
        <Wrapper innerWidth={useResize.innerWidth}>
            <ImageSection>
                <Image src={getImage('PROFILE')} radius={8} />
            </ImageSection>

            <IntroduceSection>
                <IntroduceHeader>
                    <TimingAnimation>
                        <Title color="grayscale100" size="4xLarge" weight="bold">
                            김성찬, SeongChan Kim
                        </Title>
                    </TimingAnimation>

                    <List listStyleType="disc">
                        <TimingAnimation>
                            <ListItemFormControl label="안녕하세요! FE 개발자로 꾸준하고 가파르게 성장하는 것을 목표로 하고 있는 김성찬입니다." />
                        </TimingAnimation>

                        <TimingAnimation>
                            <ListItemFormControl label="단 한줄의 코드도 다른 사람들이 이해할 수 있는 코드를 작성하려고 합니다." />
                        </TimingAnimation>

                        <TimingAnimation>
                            <ListItemFormControl label="혼자하는 것보다 협업하면서 개발하는 것을 즐깁니다." />
                        </TimingAnimation>
                    </List>
                </IntroduceHeader>
            </IntroduceSection>
        </Wrapper>
    );
};

export default Profile;

const Wrapper = styled.div<{ innerWidth: number }>`
    display: flex;

    ${(props) => {
        if (props.innerWidth < 600) {
            return css`
                flex-direction: column;
                align-items: center;
                gap: 32px;

                & > section:first-of-type > img {
                    width: 100%;

                    min-width: 196px;
                    max-width: 336px;
                }
            `;
        } else {
            return css`
                gap: 64px;

                & > section:first-of-type > img {
                    width: 196px;
                    height: 196px;
                }
            `;
        }
    }}
`;

const ImageSection = styled.section``;

const IntroduceSection = styled.section``;

const IntroduceHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
