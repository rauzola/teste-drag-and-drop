import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  body {
   
    font-family: 'Montserrat', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .main-container {
    max-width: 78rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
  
  .button {
    background: linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%);
    border: 1px solid #24293f;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    font-size: 1rem;
    line-height: 150%;
    font-weight: 700;
    color: #ffffff;
  }

  margin: 20px;
  .container {
  display: flex;
}

.col-1 {
  flex: 1;
  /* border-right: 1px solid black; */
  padding-right: 10px;
}

.col-2 {
  flex: 1;
  /* border-left: 1px solid black; */
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
  /* border: 1px solid black; */
}

`;
