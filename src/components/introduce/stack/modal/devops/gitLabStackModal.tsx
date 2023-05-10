import List from '@src/components/atoms/list';
import ListItemFormControl from '@src/components/molecules/listItemFormControl';
import Modal from '@src/components/molecules/modal/modal';

interface Props {
    onClose: () => void;
}

const GitLabStackModal = (props: Props) => {
    return (
        <Modal onClose={props.onClose}>
            <List listStyleType="disc">
                <ListItemFormControl
                    label="GitLab"
                    labelBold
                    contents={[
                        'Branch 전략 : Master, Develop, Feature 등',
                        'Commit 컨벤션 : Feat, Fix, Rename, Chore 등',
                        '코드리뷰 : GitLab MR',
                        'CI/CD 파이프라인 : GitLab CI, GitLab Runner',
                    ]}
                />
            </List>
        </Modal>
    );
};

export default GitLabStackModal;
