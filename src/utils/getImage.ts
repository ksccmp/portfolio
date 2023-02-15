type Src = 'ARROW-DOWN' | 'ARROW-UP' | 'PROFILE';

export const getImage = (src: Src) => {
    switch (src) {
        case 'ARROW-DOWN':
            return '/images/arrow-down.svg';

        case 'ARROW-UP':
            return '/images/arrow-up.svg';

        case 'PROFILE':
            return '/images/profile.jpg';

        default:
            return '';
    }
};
