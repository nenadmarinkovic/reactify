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
  width: 100%;
  scrollbar-gutter: stable;
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
  cursor: pointer;
}

.container {
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;

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

  @media (max-width: 768px) {
    padding: 0 20px;
  }
}

.no-data {
  text-align: center;
  display: block;
  padding-bottom: 30%;
  color: ${({ theme }) => theme.mainText};
  transition: all .3s;

  @media (max-width: 768px) {
    padding: 0;
  }
}

.scroll-to-intro {
  @media (max-width: 768px) {
    height: 20px;
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

// React Graph

.stats-graph {
  width: 560px;
  text-align: end;
  margin-right: 10px;

  @media (max-width: 880px) {
    text-align: center;
    margin-top: 40px;
    width: 100%;
  }
}

.ct-double-octave:after,
.ct-major-eleventh:after,
.ct-major-second:after,
.ct-major-seventh:after,
.ct-major-sixth:after,
.ct-major-tenth:after,
.ct-major-third:after,
.ct-major-twelfth:after,
.ct-minor-second:after,
.ct-minor-seventh:after,
.ct-minor-sixth:after,
.ct-minor-third:after,
.ct-octave:after,
.ct-perfect-fifth:after,
.ct-perfect-fourth:after,
.ct-square:after {
  content: "";
  clear: both;
}

.ct-label {
  fill: rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.75rem;
  line-height: 1;
}

.ct-grid-background,
.ct-line {
  fill: none;
}

.ct-chart-bar .ct-label,
.ct-chart-line .ct-label {
  display: block;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.ct-label.ct-horizontal.ct-start {
  -webkit-box-align: flex-end;
  -webkit-align-items: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  -webkit-box-pack: flex-start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  text-align: left;
  text-anchor: start;
}

.ct-label.ct-horizontal.ct-end {
  -webkit-box-align: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  -webkit-box-pack: flex-start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  text-align: left;
  text-anchor: start;
}

.ct-label.ct-vertical.ct-start {
  -webkit-box-align: flex-end;
  -webkit-align-items: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  -webkit-box-pack: flex-end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: flex-end;
  justify-content: flex-end;
  text-align: right;
  text-anchor: end;
}

.ct-label.ct-vertical.ct-end {
  -webkit-box-align: flex-end;
  -webkit-align-items: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  -webkit-box-pack: flex-start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  text-align: left;
  text-anchor: start;
}

.ct-chart-bar .ct-label.ct-horizontal.ct-start {
  -webkit-box-align: flex-end;
  -webkit-align-items: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  text-anchor: start;
}

.ct-chart-bar .ct-label.ct-horizontal.ct-end {
  -webkit-box-align: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  text-anchor: start;
}

.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {
  -webkit-box-align: flex-end;
  -webkit-align-items: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  -webkit-box-pack: flex-start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  text-align: left;
  text-anchor: start;
}

.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {
  -webkit-box-align: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  -webkit-box-pack: flex-start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  text-align: left;
  text-anchor: start;
}

.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: flex-end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: flex-end;
  justify-content: flex-end;
  text-align: right;
  text-anchor: end;
}

.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: flex-start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  text-align: left;
  text-anchor: end;
}

.ct-grid {
  stroke: rgba(0, 0, 0, 0.2);
  stroke-width: 1px;
  stroke-dasharray: 2px;
}

.ct-point {
  stroke-width: 10px;
  stroke-linecap: round;
}

.ct-line {
  stroke-width: 4px;
}

.ct-area {
  stroke: none;
  fill-opacity: 0.1;
}

.ct-bar {
  fill: none;
  stroke-width: 10px;
}

.ct-slice-donut {
  fill: none;
  stroke-width: 60px;
}

.ct-series-a .ct-bar,
.ct-series-a .ct-line,
.ct-series-a .ct-point,
.ct-series-a .ct-slice-donut {
  stroke: #d70206;
}

.ct-series-a .ct-area,
.ct-series-a .ct-slice-donut-solid,
.ct-series-a .ct-slice-pie {
  fill: #d70206;
}

.ct-series-b .ct-bar,
.ct-series-b .ct-line,
.ct-series-b .ct-point,
.ct-series-b .ct-slice-donut {
  stroke: #f05b4f;
}

.ct-series-b .ct-area,
.ct-series-b .ct-slice-donut-solid,
.ct-series-b .ct-slice-pie {
  fill: #f05b4f;
}

.ct-series-c .ct-bar,
.ct-series-c .ct-line,
.ct-series-c .ct-point,
.ct-series-c .ct-slice-donut {
  stroke: #f4c63d;
}

.ct-series-c .ct-area,
.ct-series-c .ct-slice-donut-solid,
.ct-series-c .ct-slice-pie {
  fill: #f4c63d;
}

.ct-series-d .ct-bar,
.ct-series-d .ct-line,
.ct-series-d .ct-point,
.ct-series-d .ct-slice-donut {
  stroke: #d17905;
}

.ct-series-d .ct-area,
.ct-series-d .ct-slice-donut-solid,
.ct-series-d .ct-slice-pie {
  fill: #d17905;
}

.ct-series-e .ct-bar,
.ct-series-e .ct-line,
.ct-series-e .ct-point,
.ct-series-e .ct-slice-donut {
  stroke: #453d3f;
}
.ct-series-e .ct-area,
.ct-series-e .ct-slice-donut-solid,
.ct-series-e .ct-slice-pie {
  fill: #453d3f;
}

.ct-series-f .ct-bar,
.ct-series-f .ct-line,
.ct-series-f .ct-point,
.ct-series-f .ct-slice-donut {
  stroke: #59922b;
}

.ct-series-f .ct-area,
.ct-series-f .ct-slice-donut-solid,
.ct-series-f .ct-slice-pie {
  fill: #59922b;
}
.ct-series-g .ct-bar,
.ct-series-g .ct-line,
.ct-series-g .ct-point,
.ct-series-g .ct-slice-donut {
  stroke: #0544d3;
}

.ct-series-g .ct-area,
.ct-series-g .ct-slice-donut-solid,
.ct-series-g .ct-slice-pie {
  fill: #0544d3;
}

.ct-series-h .ct-bar,
.ct-series-h .ct-line,
.ct-series-h .ct-point,
.ct-series-h .ct-slice-donut {
  stroke: #6b0392;
}

.ct-series-h .ct-area,
.ct-series-h .ct-slice-donut-solid,
.ct-series-h .ct-slice-pie {
  fill: #6b0392;
}

.ct-series-i .ct-bar,
.ct-series-i .ct-line,
.ct-series-i .ct-point,
.ct-series-i .ct-slice-donut {
  stroke: #f05b4f;
}

.ct-series-i .ct-area,
.ct-series-i .ct-slice-donut-solid,
.ct-series-i .ct-slice-pie {
  fill: #f05b4f;
}

.ct-series-j .ct-bar,
.ct-series-j .ct-line,
.ct-series-j .ct-point,
.ct-series-j .ct-slice-donut {
  stroke: #dda458;
}

.ct-series-j .ct-area,
.ct-series-j .ct-slice-donut-solid,
.ct-series-j .ct-slice-pie {
  fill: #dda458;
}

.ct-series-k .ct-bar,
.ct-series-k .ct-line,
.ct-series-k .ct-point,
.ct-series-k .ct-slice-donut {
  stroke: #eacf7d;
}

.ct-series-k .ct-area,
.ct-series-k .ct-slice-donut-solid,
.ct-series-k .ct-slice-pie {
  fill: #eacf7d;
}

.ct-series-l .ct-bar,
.ct-series-l .ct-line,
.ct-series-l .ct-point,
.ct-series-l .ct-slice-donut {
  stroke: #86797d;
}

.ct-series-l .ct-area,
.ct-series-l .ct-slice-donut-solid,
.ct-series-l .ct-slice-pie {
  fill: #86797d;
}

.ct-series-m .ct-bar,
.ct-series-m .ct-line,
.ct-series-m .ct-point,
.ct-series-m .ct-slice-donut {
  stroke: #b2c326;
}

.ct-series-m .ct-area,
.ct-series-m .ct-slice-donut-solid,
.ct-series-m .ct-slice-pie {
  fill: #b2c326;
}
.ct-series-n .ct-bar,
.ct-series-n .ct-line,
.ct-series-n .ct-point,
.ct-series-n .ct-slice-donut {
  stroke: #6188e2;
}

.ct-series-n .ct-area,
.ct-series-n .ct-slice-donut-solid,
.ct-series-n .ct-slice-pie {
  fill: #6188e2;
}

.ct-series-o .ct-bar,
.ct-series-o .ct-line,
.ct-series-o .ct-point,
.ct-series-o .ct-slice-donut {
  stroke: #a748ca;
}

.ct-series-o .ct-area,
.ct-series-o .ct-slice-donut-solid,
.ct-series-o .ct-slice-pie {
  fill: #a748ca;
}

.ct-square {
  display: block;
  position: relative;
  width: 100%;
}

.ct-square:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 100%;
}

.ct-square:after {
  display: table;
}

.ct-square > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-minor-second {
  display: block;
  position: relative;
  width: 100%;
}

.ct-minor-second:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 93.75%;
}

.ct-minor-second:after {
  display: table;
}

.ct-minor-second > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-major-second {
  display: block;
  position: relative;
  width: 100%;
}

.ct-major-second:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 88.8888888889%;
}

.ct-major-second:after {
  display: table;
}

.ct-major-second > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-minor-third {
  display: block;
  position: relative;
  width: 100%;
}

.ct-minor-third:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 83.3333333333%;
}

.ct-minor-third:after {
  display: table;
}
.ct-minor-third > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-major-third {
  display: block;
  position: relative;
  width: 100%;
}

.ct-major-third:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 80%;
}

.ct-major-third:after {
  display: table;
}

.ct-major-third > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-perfect-fourth {
  display: block;
  position: relative;
  width: 100%;
}

.ct-perfect-fourth:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 75%;
}

.ct-perfect-fourth:after {
  display: table;
}

.ct-perfect-fourth > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-perfect-fifth {
  display: block;
  position: relative;
  width: 100%;
}

.ct-perfect-fifth:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 66.6666666667%;
}

.ct-perfect-fifth:after {
  display: table;
}

.ct-perfect-fifth > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-minor-sixth {
  display: block;
  position: relative;
  width: 100%;
}

.ct-minor-sixth:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 62.5%;
}

.ct-minor-sixth:after {
  display: table;
}

.ct-minor-sixth > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-golden-section {
  display: block;
  position: relative;
  width: 100%;
}

.ct-golden-section:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 61.804697157%;
}

.ct-golden-section:after {
  content: "";
  display: table;
  clear: both;
}

.ct-golden-section > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-major-sixth {
  display: block;
  position: relative;
  width: 100%;
}

.ct-major-sixth:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 60%;
}

.ct-major-sixth:after {
  display: table;
}

.ct-major-sixth > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-minor-seventh {
  display: block;
  position: relative;
  width: 100%;
}

.ct-minor-seventh:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 56.25%;
}

.ct-minor-seventh:after {
  display: table;
}

.ct-minor-seventh > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-major-seventh {
  display: block;
  position: relative;
  width: 100%;
}

.ct-major-seventh:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 53.3333333333%;
}

.ct-major-seventh:after {
  display: table;
}

.ct-major-seventh > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-octave {
  display: block;
  position: relative;
  width: 100%;
}

.ct-octave:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 50%;
}

.ct-octave:after {
  display: table;
}

.ct-octave > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-major-tenth {
  display: block;
  position: relative;
  width: 100%;
}

.ct-major-tenth:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 40%;
}

.ct-major-tenth:after {
  display: table;
}

.ct-major-tenth > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-major-eleventh {
  display: block;
  position: relative;
  width: 100%;
}
.ct-major-eleventh:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 37.5%;
}

.ct-major-eleventh:after {
  display: table;
}

.ct-major-eleventh > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-major-twelfth {
  display: block;
  position: relative;
  width: 100%;
}

.ct-major-twelfth:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 33.3333333333%;
}

.ct-major-twelfth:after {
  display: table;
}

.ct-major-twelfth > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.ct-double-octave {
  display: block;
  position: relative;
  width: 100%;
}

.ct-double-octave:before {
  display: block;
  float: left;
  content: "";
  width: 0;
  height: 0;
  padding-bottom: 25%;
}

.ct-double-octave:after {
  display: table;
}

.ct-double-octave > svg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.link-item {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}

.banner-button {
  text-decoration: none;
  display: flex;
  height: 60px;
  align-items: center;
  width: 100%;
  justify-content: center;
}


.box {
  position: relative;
  width: 800px;
  height: 800px;
  animation: box-animate 30s linear infinite;
  position: absolute;
  z-index: 0;
  right: 0;
  bottom: -53%;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
}

.point {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12%;
  height: 12%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.reactAnimationColor};
  transform: translate(-50%, -50%) scale(0);
  animation: point-animate 0.75s ease .5s forwards;
}

[class^="ring-"] {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 15px solid transparent;
}

.ring-1 {
  animation: r1 1.5s ease 1.75s forwards;
}

.ring-2 {
  animation: r2 1.5s ease 1.85s forwards;
}

.ring-3 {
  animation: r3 1.5s ease 2s forwards;
}

@keyframes box-animate {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(1turn);
  }
}

@keyframes point-animate {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes r1 {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
    transform: translate(-50%, -50%);
    border-color: transparent;
  }

  40%,
  60% {
    width: 100%;
    height: 100%;
    opacity: 1;
    border-color: ${({ theme }) => theme.reactAnimationColor};
    transform: translate(-50%, -50%);
  }

  100% {
    width: 100%;
    height: 100%;
    opacity: 1;
    border-color: ${({ theme }) => theme.reactAnimationColor};
    transform: translate(-50%, -50%) rotateZ(30deg) rotateY(70deg);
  }
}

@keyframes r2 {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
    transform: translate(-50%, -50%);
    border-color: transparent;
  }

  40%,
  60% {
    width: 100%;
    height: 100%;
    opacity: 1;
    border-color: ${({ theme }) => theme.reactAnimationColor};
    transform: translate(-50%, -50%);
  }

  100% {
    width: 100%;
    height: 100%;
    opacity: 1;
    border-color: ${({ theme }) => theme.reactAnimationColor};
    transform: translate(-50%, -50%) rotateZ(90deg) rotateY(70deg);
  }
}

@keyframes r3 {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
    transform: translate(-50%, -50%);
    border-color: transparent;
  }

  40%,
  60% {
    width: 100%;
    height: 100%;
    opacity: 1;
    border-color: ${({ theme }) => theme.reactAnimationColor};
    transform: translate(-50%, -50%);
  }

  100% {
    width: 100%;
    height: 100%;
    opacity: 1;
    border-color: ${({ theme }) => theme.reactAnimationColor};
    transform: translate(-50%, -50%) rotateZ(150deg) rotateY(70deg);
  }
}


`;
