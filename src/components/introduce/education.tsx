import List from '../atoms/list';
import ContentWrapper from '../molecules/contentWrapper';
import ListItemFormControl from '../molecules/listItemFormControl';

const Education = () => {
    return (
        <ContentWrapper label="🎓 Education">
            <List listStyleType="disc">
                <ListItemFormControl
                    label="한양대 에리카 (2013.03 ~ 2019.08)"
                    contents={['응용수학과 주전공, 학사', '컴퓨터공학과 복수전공, 학사']}
                />
            </List>
        </ContentWrapper>
    );
};

export default Education;
