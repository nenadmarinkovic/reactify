import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Studio-Feixen-Sans Regular';
  src: url('../fonts/StudioFeixenSans-Regular.woff2') format('woff2'),
      url('../fonts/StudioFeixenSans-Regular.woff') format('woff');
      font-weight: normal;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Studio-Feixen-Sans Bold';
  src: url('../fonts/StudioFeixenSans-Bold.woff2') format('woff2'),
      url('../fonts/StudioFeixenSans-Bold.woff') format('woff');
      font-weight: bold;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Studio-Feixen-Sans Black';
  src: url('../fonts/StudioFeixenSans-Black.woff2') format('woff2'),
      url('../fonts/StudioFeixenSans-Black.woff') format('woff');
      font-weight: 700;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Studio-Feixen-Sans Book';
  src: url('../fonts/StudioFeixenSans-Book.woff2') format('woff2'),
      url('../fonts/StudioFeixenSans-Book.woff') format('woff');
      font-weight: lighter;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Studio-Feixen-Sans Medium';
  src: url('../fonts/StudioFeixenSans-Medium.woff2') format('woff2'),
      url('../fonts/StudioFeixenSans-Medium.woff') format('woff');
      font-weight: normal;
  font-style: normal;
  font-display: block;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  font-family: 'Studio-Feixen-Sans', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  background: white;
  height: 100%;
  overflow-x: hidden;
  -moz-osx-font-smoothing: grayscale;
  background: ${({ theme }) => theme.background};
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

ul, li {
  list-style-type: none;
  line-height: 1.7;
}

a {
  text-decoration: none;
}

.container {
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;

@media (min-width: 1580px) {
    max-width: 1440px;
}

@media (max-width: 560px) {
    padding: 0 20px;
  }
}

.container-inside {
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
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

.no-ml {
  margin-left: 0;
}

.no-mr {
  margin-right: 0;
}

svg {
    transition: all 0.25s linear;
  }

.active-button {
  border: ${({ theme }) => theme.activeButtonBorder} !important;
  color: ${({ theme }) => theme.helperText} !important;
  background: transparent !important;
}

.tech-icon {
  width: 140px;
}

.tech-icon-alt {
  width: 80px;
}

span.token.string {
  color: ${({ theme }) => theme.spanToken} !important;
}

span.token.template-string.interpolation.constant {
  color: #E16EA6 !important;
}

span.token.class-name {
  color: #E6922F !important;
}

.logo-data-big {
  width: 180px !important;
}
`;
