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
  
  @media ${devices.tablet}{
    body{ background-position: center;}

    .PagesStyle{ height: 82%; }

    .Footer{ height: 12%; }
    
    .List{
        height: 85%;

        #title{
          font-size: 16px !important;
        }
        img{
          max-width: 260px;
        }
    }

    .FavoritesPage{
      width: 80%
    }

    .PlotPage{
      width: 90%;
      height: 80%;

      
    }
  }

  @media (max-height: 600px){
    body{
      height: 150vh;
    }
    .StyledApp{
      height: 150vh;
    }

    .List{
      .title{
        font-size: 11px !important;
      }
    }

    .FavoritesPage, .PlotPage{
      background-size: cover;
    }
    
    .PlotPage{
      img{
        max-width: 150px;
      }
    }
    
  }   
  
  @media ${devices.mobile}{
    body{
      background-image: url(${bgMobile});
      background-repeat: no-repeat;
    }
    
    .Header{
      img{
        max-width: 90px;
      }
    }

    .List{
      .title{
        font-size: 16px !important;
      }
    }
    
    .PlotPage{
      #container{
        grid-template-rows: 15% 40% 45%;
        grid-template-columns: 1fr;
        row-gap: 2%;
      }
      
      img{
        grid-row: span 1;
        
      }
      #info{
        font-size: 14px;
      }
    }

    .FavoritesPage{
      width: 94% ;
    }
  }
  `

export default GlobalStyle