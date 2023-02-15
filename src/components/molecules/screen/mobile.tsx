import { ReactNode } from 'react';

import _useResize from '@src/modules/customHook/useResize';
import { SCREEN } from '@src/utils/constant';

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
