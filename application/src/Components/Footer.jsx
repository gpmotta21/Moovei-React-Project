import styled from "styled-components";
import { i } from '../assets/icons';

function Footer() {
    return (
        <FooterStyle >
          <a href='https://github.com/gpmotta21/Moovei-React-Project'>{i.github}</a>
          <a href='https://www.linkedin.com/in/gpmotta21/'>{i.linkedin}</a>
        </FooterStyle>
    );
}

export default Footer;

const FooterStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 12%;
    width: 100%;
    *{ color: var(--dark); }


    a{
        display: flex;
        flex-direction: column;;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 26px;
        margin: 0 1rem;
        overflow: hidden;
    }

    a:after{
        content: ' gpmotta21';
        font-size: 14px;
        max-height: 0;
        overflow: hidden;
        transition: all .5s ease-in-out;
    }

    a:hover:after{
        max-height: 1rem;
    }



`