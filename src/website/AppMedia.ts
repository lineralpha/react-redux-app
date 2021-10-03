import {createMedia} from '@artsy/fresnel';

// Guidance: https://github.com/Semantic-Org/Semantic-UI-React/pull/4008

const AppMedia = createMedia({
    // breakpoints based on screen sizes
    breakpoints: {
        mobile: 320,
        tablet: 768,
        desktop: 992,
        largeScreen: 1200,
        wideScreen: 1920
    }
});

// The style is only needed when using SSR (server-side rendering)
// https://github.com/artsy/fresnel#createmediastyle
export const mediaStyle = AppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = AppMedia;
