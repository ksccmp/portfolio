type Src = 'PROFILE';

export const getImage = (src: Src) => {
    switch (src) {
        case 'PROFILE':
            return '/images/profile.jpg';

        default:
            return '';
    }
};
