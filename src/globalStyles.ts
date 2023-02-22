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

    &::-webkit-scrollbar {
      width: 1rem;               
    }

    &::-webkit-scrollbar-track {
      background: #060B28;        
    }

    &::-webkit-scrollbar-thumb {
      background-color: #2F5AFF;    
      border-radius: .5rem;       
      border: 0.25rem solid #060B28;  
    }
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
  .columns-container {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .column {
    flex: 1;
    padding: 10px;
    border-right: 1px solid #ccc;
  }

  .column:last-child {
    border-right: none;
  }

  .column h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .column ul {
    list-style: none;
    padding-left: 0;
  }

  .column li {
    margin-bottom: 5px;
  }

  .item {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }
`;
