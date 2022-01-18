import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --black: #2E2E2E;
  --darkBlack: #474747;
  --gray: #959595;
  --darkGray: #707070;
  --liteGray: #E4E4E4;
  --green: #0ABF9E;
  --darkGreen: #01A75A;
  --violet: #9D54BB;
}

@font-face {
    font-family: 'Segoe UI';
    src: url("assets/fonts/sagoeui.ttf") format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
}

body {
    background: '#f6f6f6';
    transition: all 0.2s;
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Segoe UI', sans-serif;
    font-weight: 300;
  }
  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }


 // font-size: 16px (desktop)
 html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
    scroll-behavior: smooth;
}
  // REM = 1rem = 16px
  button {
    cursor: pointer;
  }
`;