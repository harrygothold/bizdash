import { createGlobalStyle } from 'styled-components';

export const black = '#252020'
export const darkGrey = "#515263";
export const medGrey = "#dad9d9";
export const lightGrey = "#f7f7f7";
export const brandColor = '#1dda65';
export const darkerGrey = '#353131';

const GlobalStyle = createGlobalStyle`
    body {
        h1 {
            ${({dark}) => dark && `color: ${brandColor};`}
        }
        color: ${darkGrey};
        background: ${({dark}) => dark ? black : lightGrey};
        font-family: 'Blinker', sans-serif;
    }
`;

export default GlobalStyle;