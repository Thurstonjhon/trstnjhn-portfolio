import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    // Normalize
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: #e6e6e6;
        font-family: 'Poppins', sans-serif;
        cursor: none;
        // overflow: hidden;
    }

    .c-scrollbar {
        z-index: 99;
    }
`

export default GlobalStyle
