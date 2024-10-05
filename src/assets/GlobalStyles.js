import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  
  html {
    font-size: 100%;
    
  }
  
  body {
    margin: 0;
    
  }
 

  h1 {
    font-family: "Roboto", serif;
    font-weight: 500;
    line-height: 1.2;
    font-size:3rem;
   
    
  }

  
  
  h2,h3,h4,h5,h6 {
    font-family: "Roboto", serif;
    font-weight: 500;
    line-height: 1.2;
    font-size:2rem;
    
  }
  
  
  p, li, a, span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    font-size: 1.125;
    
  }
`;
