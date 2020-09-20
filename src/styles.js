import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.base};
    transition: background .5s ease;
    padding-bottom: 5vw;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans';
    font-size: 1rem;
    box-sizing: border-box;
  }

  .w5 { height: max(5vw, 5vh) }
  .w10 { height: max(10vw, 10vh) }

  @keyframes pulseLight {
    0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, .15) }
    100% { box-shadow: 0 0 0 60px rgba(255, 255, 255, 0) }
  }

  @keyframes pulseDark {
    0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, .05) }
    100% { box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) }
  }
`

const baseStyles = {
  primary: '#60b389',
  accent: '#97cfb3',

  light: 300,
  regular: 400,
  bold: 600,
  corners: 5,
  cornersSm: 3,
}

export const theme = {
  dark: {
    mode: 'dark',
    base: '#111111',
    complement: '#ffffff',
    ...baseStyles
  },

  light: {
    mode: 'light',
    base: '#ffffff',
    complement: '#111111',
    ...baseStyles
  }
}