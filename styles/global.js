import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Rigid Square Regular';
  src: url('../fonts/RigidSquare-Regular.woff2') format('woff2'),
      url('../fonts/RigidSquare-Regular.woff') format('woff');
      font-weight: normal;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Rigid Square Light';
  src: url('../fonts/RigidSquare-Light.woff2') format('woff2'),
      url('../fonts/RigidSquare-Light.woff') format('woff');
      font-weight: lighter;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Brandon Grotesque Bold';
  src: url('../fonts/BrandonGrotesque-Bold.woff2') format('woff2'),
      url('../fonts/BrandonGrotesque-Bold.woff') format('woff');
      font-weight: bold;
  font-style: normal;
  font-display: block;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  background: white;
  height:100%;
  overflow-x: hidden;
  transition: all 0.25s linear;
}

body {
  margin: 0;
  padding: 0;
}

input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.container {
  max-width: 1420px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;

@media (max-width: 1680px) {
    max-width: 1440px;
}

@media (max-width: 560px) {
    padding: 0 20px;
  }
}

.page-transition-enter {
  opacity: 0;
}

.page-transition-enter-active {
  opacity: 1;
  transition: opacity 300ms;
}

.page-transition-exit {
  opacity: 1;
}

.page-transition-exit-active {
  opacity: 0;
  transition: opacity 300ms;
}


`;
