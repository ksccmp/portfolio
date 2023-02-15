import { useState } from 'react';

export const _useModal = () => {
    /**
     * useState
     */
    const [openIds, setOpenIds] = useState<string[]>([]);

    /**
     * open
     */
    const open = (id: string) => {
        setOpenIds((prev) => [...prev, id]);

        const body = document.querySelector('body');
        if (body) {
            body.style.overflow = 'hidden';
        }
    };

    /**
     * close
     */
    const close = (id: string) => {
        const filterOpenIds = openIds.filter((openId) => openId !== id);
        setOpenIds(filterOpenIds);

        if (filterOpenIds.length <= 0) {
            const body = document.querySelector('body');
            if (body) {
                body.style.overflow = '';
            }
        }
    };

    /**
     * isOpen
     */
    const isOpen = (id: string) => {
        return openIds.includes(id);
    };

    return {
        open,
        close,
        isOpen,
    };
};
