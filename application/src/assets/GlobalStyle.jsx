import { createGlobalStyle } from "styled-components";
import { devices } from '../assets/devices';
import bgDesktop from '../assets/img/bgDesktop.png'
import bgMobile from '../assets/img/bgMobile.png'

const GlobalStyle = createGlobalStyle`
  :root{
    --green: #8AC926;
    --dark: #14213D;
    --border: solid 2px var(--green);
    --bottomborder: solid 2px var(--green);
    --white: #E0FBFC;
  }

      *{
        font-family: 'Amaranth', sans-serif;    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
    button{ cursor:pointer }
    
    body html #root { height: 100; }

    body{
      background-image: url(${bgDesktop});
      background-size: cover;
      
    }
  
  @media ${devices.tablet} { body{ background-position: center;} }

  @media (max-height: 600px) { body{ height: 150vh; } }   
  
  @media ${devices.mobile}{
    body{
      background-image: url(${bgMobile});
      background-repeat: no-repeat;
    }
  }
  `

export default GlobalStyle