import { Routes, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyle from './assets/GlobalStyle';
import MoviesPage from './Routes/MoviesPage';
import FavoritesPage from './Routes/FavoritesPage';
import PlotPage from './Routes/PlotPage';
import Footer from './Components/Footer';
import {AnimatePresence} from 'framer-motion'

function App() {

  const location = useLocation()

  return (
    <StyledApp>
      <GlobalStyle />
          <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<MoviesPage />} />
            <Route path='plot' element={<PlotPage />} />
            <Route path='favorites' element={<FavoritesPage />} />
          </Routes>
          </AnimatePresence>
      <Footer className='Footer'/>
    </StyledApp>
  );
}

export default App;


const StyledApp = styled.div`
  width: 100%;
  height: 100vh;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;

  @media (max-height: 600px){ height: 150vh; }
  `
