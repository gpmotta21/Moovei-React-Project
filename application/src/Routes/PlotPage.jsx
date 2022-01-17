import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from './FavoritesPage';
import { i } from '../assets/icons';
import alternateBg from '../assets/img/alternateBg.png';
import { AnimatedPages } from './AnimatedPages'

const animations = {
  initial: {opacity: 0, x: 1920},
  animate: {opacity: 1, x: 0},
  exit: {opacity: 0, x: -1920}
}

export default function Plot({className}) {
  const plot = useSelector(state => state.plot)
  const navigate = useNavigate()

  const renderPlot = () => {
    if (plot.loading) {
      return <h1>loading</h1>
    }
    return <div id='container'>
      <div id='title'>
        <h3>{plot.items.Title}</h3>
        <span style={{ color: plot.items.Metascore > 80 ? '#8AC926' : plot.items.Metascore > 50 ? 'yellow' : 'red', marginLeft: '5px' }}>Rating: {plot.items.Metascore}</span>
      </div>
        <img src={plot.items.Poster} />
      <div id='info'>
        <div>{plot.items.Plot}</div>
        <div>Cast: {plot.items.Actors}</div>
      </div>
    </div>
  }

  return (
    <StyledPlot className={className} animations={animations}>
      {renderPlot()}
      <StyledButton onClick={() => navigate('/')}>
        {i.house}
      </StyledButton>
    </StyledPlot>
  )
}

const StyledPlot = styled(AnimatedPages)`

height: 84%;
width: 60%;
position: relative;

#container{
    padding: .4rem;
    height: 100%;
    display: grid;
    grid-template-rows: 25% 75%;
    grid-template-columns: 55% 45%;
    row-gap: 1%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-image: url(${alternateBg});
    background-size: cover;
    background-position: center;
    border: solid 2px var(--green);
    border-radius: 22px;
    color: var(--white);
  }

  #title{
    align-self: flex-end;
    width: auto;
    border-bottom: var(--bottomborder);
    z-index: 2;
    pointer-events: none;
    text-align: center;
  }

  h2{
    text-align: center;
  }
  
  #info{
    align-self: flex-start;
    height: 80%;
    display: flex;
    gap: 5%;
    font-size: 19px;
    flex-direction: column;
    overflow-y: auto;
    background: rgb(0, 0, 23, .5);
    color: var(--white);
    border-radius: 12px;
  }
  

  
  img{
    display: block;
    grid-row: span 2;
    justify-self: center;
    border: solid 2px var(--green);
    border-radius: 22px;
    max-width: 100%;
    max-height: 90%;
  }

  `
