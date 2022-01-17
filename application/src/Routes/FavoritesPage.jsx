import List from '../Components/List';
import styled from 'styled-components';
import { i } from '../assets/icons'
import { useNavigate } from 'react-router-dom';
import alternateBg from '../assets/img/alternateBg.png'
import { AnimatedPages } from './AnimatedPages'

function Favortites({ className }) {
    const animations = {
        initial: {opacity: 0, x: 1920},
        animate: {opacity: 1, x: 0},
        exit: {opacity: 0, x: -1920}
    }

    const navigate = useNavigate()

    return (
            <StyledFav className={className} animations={animations}>
                <List className='List' type='favorite' />
                <StyledButton onClick={() => navigate('/')}>
                    {i.house}
                </StyledButton>
            </StyledFav>
    )
}

export default Favortites;

const StyledFav = styled(AnimatedPages)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 84%;
    width: 60%;
    border-radius: 10px;
    padding: 5px;
    border: var(--border);
    background-image: url(${alternateBg});
    background-size: cover;
    background-position: center;



    
    .List .title, .List .other { color: var(--white) !important; }
    `
const StyledButton = styled.button`
        position: absolute;
        transform: translate(-50%, -50%);
        left: 100%;
        top: 0;
        padding: 10px;
        background: var(--green);
        border: none;
        border-radius: 50%;
        font-size: 18px;
        color: var(--dark) !important;
        transition: all .5s;

    :hover{ font-size: 28px; }

    .teste{
        display: none;
    }
    
`

export { StyledButton }