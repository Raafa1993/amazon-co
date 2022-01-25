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

/* @font-face {
    font-family: 'Segoe';
    src: url("/sagoeui.ttf");
    font-weight: 500;
    font-style: normal;
    font-display: auto;
} */

@font-face {
  font-family: 'SegoeUI';
  src:
  local("Segoe UI"),
  url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2) format("woff2"),
  url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff) format("woff"),
  url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf) format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: 'SegoeUI';
  src:
  local("Segoe UI Semibold"),
  url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2) format("woff2"),
  url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff) format("woff"),
  url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf) format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: 'SegoeUI';
  src:
  local("Segoe UI Bold"),
  url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2) format("woff2"),
  url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff) format("woff"),
  url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf) format("truetype");
  font-weight: 700;
}

body {
    background: '#f6f6f6';
    transition: all 0.2s;
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'SegoeUI', sans-serif;
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
