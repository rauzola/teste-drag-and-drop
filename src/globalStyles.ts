import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
   
    font-family: 'Montserrat', sans-serif;

  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }


  margin: 20px;
  .container {
  display: flex;
}

.col-1 {
  flex: 1;
  border-right: 1px solid black;
  padding-right: 10px;
}

.col-2 {
  flex: 1;
  border-left: 1px solid black;
  padding-left: 10px;
}

h2 {
  margin-top: 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid black;
}

`;
