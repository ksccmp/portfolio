import styled from '@emotion/styled';

import List from '@src/components/atoms/list';
import _ListItem from '@src/components/atoms/listItem';
import Text from '@src/components/atoms/text';

interface Props {
    label: string;
    contents?: string[];
}

const ListItemFormControl = (props: Props) => {
    return (
        <ListItem>
            <Text color="grayscale80" size="xLarge">
                {props.label}
            </Text>

            {props.contents && props.contents.length > 0 && (
                <List listStyleType="circle">
                    {props.contents.map((content, index) => (
                        <ListItem key={index}>
                            <Text color="grayscale60" size="large">
                                {content}
                            </Text>
                        </ListItem>
                    ))}
                </List>
            )}
        </ListItem>
    );
};

export default ListItemFormControl;

const ListItem = styled(_ListItem)`
    & h2,
    & p {
        display: inline;
    }
`;
