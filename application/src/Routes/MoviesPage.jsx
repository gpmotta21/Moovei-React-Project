import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from '../redux/actions.js';
import { useEffect } from 'react';
import styled from 'styled-components';
import List from '../Components/List'
import Header from "../Components/Header";
import { AnimatedPages } from '../Routes/AnimatedPages'

const animations = {
  initial: {opacity: 0, x: 1920},
  animate: {opacity: 1, x: 0},
  exit: {opacity: 0, x: -1920}
}


export default function MoviesList({className}) {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies('harry'))
  }, [])


  return (
<StyledMovies className={className} animations={animations}>
       <Header className='Header'/>
      <List type={'movies'} className='List'/>
</StyledMovies>
  )
}
const StyledMovies = styled(AnimatedPages)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3%;
  width: 100%;
  height: 88%;
  `