import React, { ReactNode } from 'react';

import { SCREEN } from '@src/utils/constant';
import _useResize from '@src/modules/customHook/useResize';

interface Props {
    children: ReactNode;
}

const Desktop = (props: Props) => {
    /**
     * customHook
     */
    const useResize = _useResize();

    return <>{useResize.innerWidth >= SCREEN.MOBILE && props.children}</>;
};

export default Desktop;
