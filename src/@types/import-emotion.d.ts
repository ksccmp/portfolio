import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            primary: string;
        };

        screen: {
            fold: boolean;
            mobile: boolean;
            desktop: boolean;
        };
    }
}
