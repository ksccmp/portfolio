import React, { ReactNode } from 'react';

import { SCREEN } from '@src/utils/constant';
import _useResize from '@src/modules/customHook/useResize';

interface Props {
    children: ReactNode;
}

const Mobile = (props: Props) => {
    /**
     * customHook
     */
    const useResize = _useResize();

    return <>{useResize.innerWidth >= SCREEN.FOLD && useResize.innerWidth < SCREEN.MOBILE && props.children}</>;
};

export default Mobile;
