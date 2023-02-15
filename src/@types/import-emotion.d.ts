import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        font: {
            size: {
                small: string;
                medium: string;
                large: string;
            };

            weight: {
                bold: number;
            };
        };

        color: {
            grayscale100: string;
            grayscale90: string;
            grayscale80: string;
            grayscale70: string;
            grayscale60: string;
            grayscale50: string;
            grayscale40: string;
            grayscale30: string;
            grayscale20: string;
            grayscale10: string;
        };

        screen: {
            fold: boolean;
            mobile: boolean;
            desktop: boolean;
        };
    }
}
