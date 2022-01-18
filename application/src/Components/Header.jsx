import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { i } from '../assets/icons';
import { fetchMovies } from '../redux/actions.js';
import { devices } from "../assets/devices";
import Logo from '../assets/img/Logo.png'

function Header() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <HeaderStyle>
          <img src={Logo}/>
            <input onChange={(e) => setText(e.target.value)} />
            <button id="my" onClick={() => text !== '' ? dispatch(fetchMovies(text)) : null}>{i.search}</button>
            <button onClick={() => navigate('favorites')}>{i.heart}</button>
        </HeaderStyle>
    );
}

export default Header;

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  width: 100%;
  gap: 2%;
  padding: 0 5px;

  *{
    color: var(--dark) ;
  }

  img{
    max-width: 200px;
  }

  input{
    width: 75%;
    height: 50%;
    padding-left: 3px;
    font-size: 18px;
    background: var(--dark);
    border: 2px solid var(--green);
    border-radius: 4px;
    color: var(--white);
  }

  input:focus{
    outline: none;
  }

  button{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none ;
    border: none;
    height: 100%;
    font-size: 18px;
    transition: all .5s;
  }

  button:hover{
    transform: scale(1.1);
  }

  button:after{
    content: 'Search';
    width: 100%;
    transition: all .5s;
  }

  button:last-child:after{
    content: 'Favorites';
  }

  button:last-child{
    margin-left: auto;
  }

  @media ${devices.tablet}{ height: 15%; }
  
  @media ${devices.mobile} { img{ max-width: 90px; } }

`
