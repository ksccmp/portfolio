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
        };

        screen: {
            fold: boolean;
            mobile: boolean;
            desktop: boolean;
        };
    }
}
