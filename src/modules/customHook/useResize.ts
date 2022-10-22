import { useEffect, useState } from 'react';

const _useResize = () => {
    /**
     * useState
     */
    const [innerWidth, setInnerWidth] = useState<number>(0);

    /**
     * useEffect
     */
    useEffect(() => {
        resizeConfig();

        window.addEventListener('resize', resizeConfig);
        return () => {
            window.removeEventListener('resize', resizeConfig);
        };
    }, []);

    /**
     * resizeConfig
     */
    const resizeConfig = () => {
        setInnerWidth(window.innerWidth);
    };

    return {
        innerWidth,
    };
};

export default _useResize;
