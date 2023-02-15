import { ReactNode } from 'react';

import _useResize from '@src/modules/customHook/useResize';
import { SCREEN } from '@src/utils/constant';

interface Props {
    children: ReactNode;
}

const Fold = (props: Props) => {
    /**
     * customHook
     */
    const useResize = _useResize();

    return <>{useResize.innerWidth < SCREEN.FOLD && props.children}</>;
};

export default Fold;
