import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background: ${props => props.theme.base};
    transition: background .5s ease;
    /* padding-bottom: 5vw; */
    height: 100%;
    background-image: radial-gradient(#1c202fb0, #0f1321), url(https://images.photowall.com/products/58341/foggy-forest-4.jpg?h=699&q=85);
    background-size: cover;
    background-attachment: fixed;
    font-size: 15px;

    // Pseudo background image for light mode so it can transition
    &:after {
      transition: all .25s ease;
      content: "";
      opacity: ${props => props.theme.mode === 'dark' && 0};
      background-image: radial-gradient(#fff7, #fffa), url(https://images.photowall.com/products/58341/foggy-forest-4.jpg?h=699&q=85);
      background-size: cover;
      background-attachment: fixed;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }

  .w5 { height: max(5vw, 5vh) }
  .w10 { height: max(10vw, 10vh) }

  @keyframes pulsedark {
    0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, .15) }
    100% { box-shadow: 0 0 0 60px rgba(255, 255, 255, 0) }
  }

  @keyframes pulselight {
    0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, .05) }
    100% { box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) }
  }
`

const baseStyles = {
  primary: '#60b389',
  accent: '#97cfb3',

  darkColor: '#111111',
  lightColor: '#ffffff',

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