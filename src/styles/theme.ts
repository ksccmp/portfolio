import { Theme } from '@emotion/react';

const theme: Theme = {
    font: {
        size: {
            '4xLarge': '28px',
            '3xLarge': '24px',
            '2xLarge': '20px',
            xLarge: '18px',
            large: '16px',
            medium: '14px',
            small: '12px',
            xSmall: '10px',
        },

        weight: {
            bold: 700,
        },
    },

    color: {
        grayscale100: '#13161a',
        grayscale90: '#222529',
        grayscale80: '#36393e',
        grayscale70: '#53575c',
        grayscale60: '#767a80',
        grayscale50: '#a4a8ae',
        grayscale40: '#b3b6bc',
        grayscale30: '#c2c5cb',
        grayscale20: '#dee1e5',
        grayscale10: '#f7f9fa',

        skyblue20: '#e7f3f8',

        white: '#ffffff',
    },

    screen: {
        fold: false,
        mobile: false,
        desktop: false,
    },
};

export default theme;
