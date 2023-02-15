import { ReactNode, useState } from 'react';

import styled from '@emotion/styled';

import { getImage } from '@src/utils/getImage';

import Image from '../atoms/image';
import Title from '../atoms/title';

interface Props {
    label: string;
    open?: boolean;
    children: ReactNode;
}

const Dropdown = (props: Props) => {
    /**
     * useState
     */
    const [open, setOpen] = useState<boolean>(props.open ?? true);

    /**
     * handle
     */
    const handle = {
        clickHeader: () => {
            setOpen((prev) => !prev);
        },
    };

    return (
        <Wrapper>
            <Header onClick={handle.clickHeader}>
                <Title color="grayscale90" size="xLarge" weight="bold">
                    {props.label}
                </Title>

                <Image src={open ? getImage('ARROW-UP') : getImage('ARROW-DOWN')} />
            </Header>

            {open && <Body>{props.children}</Body>}
        </Wrapper>
    );
};

export default Dropdown;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;

    cursor: pointer;

    padding: 8px 0;

    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.3);
`;

const Body = styled.body``;
