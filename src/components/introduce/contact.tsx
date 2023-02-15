import styled from '@emotion/styled';
import Link from 'next/link';

import List from '../atoms/list';
import ListItem from '../atoms/listItem';
import Span from '../atoms/span';
import Text from '../atoms/text';
import ContentWrapper from '../molecules/introduce/contentWrapper';

const Contact = () => {
    return (
        <ContentWrapper label="Contact">
            <Wrapper>
                <List>
                    <ListItem>
                        <Text color="grayscale60" size="large">
                            📧 <Span decoration="underline">ksccmp@gmail.com</Span>
                        </Text>
                    </ListItem>

                    <ListItem>
                        <Link href="https://github.com/ksccmp?tab=repositories">
                            <a>
                                <Text color="grayscale60" size="large">
                                    🐙 <Span decoration="underline">GitHub</Span>
                                </Text>
                            </a>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link href="https://jforj.tistory.com">
                            <a>
                                <Text color="grayscale60" size="large">
                                    📝 <Span decoration="underline">Blog</Span>
                                </Text>
                            </a>
                        </Link>
                    </ListItem>
                </List>
            </Wrapper>
        </ContentWrapper>
    );
};

export default Contact;

const Wrapper = styled.div``;
