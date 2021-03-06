import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html, body, #app {
  min-height: 100vh;
  background: rgb(2,22,992);
}
body {
  -webkit-font-smoothing: antialiased !important;
}
body, input, button {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
button {
  cursor: pointer;
}

`;