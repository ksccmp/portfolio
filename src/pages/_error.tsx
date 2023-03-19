import styled from '@emotion/styled';

import Text from '@src/components/atoms/text';

const Error = () => {
    return (
        <Wrapper>
            <Text size="2xLarge" weight="bold">
                제공하지 않는 페이지입니다.
            </Text>
        </Wrapper>
    );
};

export default Error;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    padding: 12px 20px;
`;
