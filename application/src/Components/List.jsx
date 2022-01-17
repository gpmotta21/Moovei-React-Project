import { useDispatch, useSelector } from "react-redux";
import { fetchPlot, addFavorite, removeFavortite } from '../redux/actions.js';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { i } from '../assets/icons';
import { AnimatedPages } from '../Routes/AnimatedPages'



function List({ type, className }) {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies)
    const favorites = useSelector(state => state.favorites)


    const goToPlot = (movie) => {
        dispatch(fetchPlot(movie))
        navigate('/plot')
    }

    const renderMovies = () => {
        if (movies.loading) {
            return (

            <div></div>
                
            
            )
        }

        if (movies.items == undefined) {
            return <div className='other'>Sorry, but this item does not exist ;-;</div>
        }
        else {
            return movies.items.map(m => {
                return <li>
                    <div className='title'>{m.Title}</div>
                    <div class="poster">
                        <div className='posterFooter'>
                            <i onClick={() => goToPlot(m.imdbID)}>{i.book}</i>
                            <i style={{ color: '#2a9d8f' }} onClick={() => dispatch(addFavorite(m))}>{i.heart}</i>
                        </div>
                        <img src={m.Poster} />
                    </div>
                </li>
            })
        }
    }

    const renderFavorites = () => {
        if (favorites.items == '') {
            return <div className='other'>It looks like your list of favorites is empty</div>
        }
        return favorites.items.map((f, index) => {
            return <li>
                <div className='title'>{f.Title}</div>
                <div class="poster">
                    <div className='posterFooter'>
                        <i onClick={() => goToPlot(f.imdbID)}>{i.book}</i>
                        <i style={{ color: '#9b2226' }} onClick={() => dispatch(removeFavortite(index))}>{i.trash}</i>
                    </div>
                    <img src={f.Poster} />
                </div>
            </li>
        })

    }

    return (
        <>
            {type == 'movies' ? <M className={className}>{renderMovies()}</M> : <M className={className}>{renderFavorites()}</M>}
        </>
    );
}

export default List;

const M = styled.ul`
    display: flex;
    align-items: center;
    overflow-x: scroll;
    scrollbar-width: thin;
    scrollbar-color: var(--green) var(--dark);
    gap: 2%;
    height: 90%;
    width: 100%;

    .other{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5%;
        height: 100%;
    }

    .title{
        height: 10%;
        font-size: 18px;
        width: 90%;;
        text-align: center;
        border-bottom: var(--bottomborder);
        color: var(--dark);
    }

    img{
        border: var(--border);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        max-width: 250px;
        max-height: 90%;
    }

    .poster{
        display: flex;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }

    img:hover{
        filter: brightness(50%);
        transition: all .5s;
    }

    .posterFooter:hover + img{ filter: brightness(50%);}

    .posterFooter{
        display: flex;
        justify-content: center;
        gap: 10%;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 110%;
        left: 50%;
        width: 100%;
        height: 10%;
        opacity: 0;
        z-index: 1;
        transition: all .5s ease-in-out;
    }

    .poster:hover .posterFooter{
        top: 95%;
        transform: translate(-50%, -50%);
        top: 50%;
        width: 100%;
        opacity: 100;
    }

    i{
        position: relative;
        cursor: pointer;
        color: var(--whited);
        font-size: 1.5rem;
        transition: all .5s;
        padding: 10px;
        color: var(--white);
    }

    i:after{
        content: '';
        position: absolute;
        transform: translate(-50%, -50%);
        top: 100%;
        left: 50%;
        border-bottom: var(--bottomborder);
        width: 0;
        transition: all .5s;
    }

    i:hover:after{
        width: 100%;
    }


 
`
