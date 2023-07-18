import  {createGlobalStyle} from 'styled-components'

export const cores = {
    preto: '#111',
    cinza: '#333',
    branco: '#EEEEEE',
    verde: '#10AC84',
    cinzaClaro: '#A3A3A3'
}

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px'
}

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    body {
        background-color: ${cores.preto};
        color: ${cores.branco};
        padding-top: 40px;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media (max-width: ${breakpoints.desktop}) {
            max-width: 80px;
        }    
    }
`

export default GlobalStyle
