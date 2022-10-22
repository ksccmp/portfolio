type Src = 'BACKGROUND';

export const getImage = (src: Src) => {
    switch (src) {
        case 'BACKGROUND':
            return '/images/background.jpg';

        default:
            return '';
    }
};
