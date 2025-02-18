import { createGlobalStyle } from 'styled-components';
import { themes } from './ColorStyles';

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${themes.light.backgroundColor};
        @media (prefers-color-scheme: dark) {
	        background: ${themes.dark.backgroundColor};
        }   
    }
    body:after {
        content: "";
        position: fixed;
        inset: 0;
        z-index: -1000;
        background-image: linear-gradient(0deg, #0d141f 30%, #381842);
    }
`;
