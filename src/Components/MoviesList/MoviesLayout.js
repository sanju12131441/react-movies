import React,{Component} from 'react';
import { Link } from 'react-router-dom';

const layout = (props) => {
    const {Year, Title,Type,imdbID,Poster} = props.movieDetails;

    const movieDetails = {
        Year, Title,Type,imdbID,Poster
    }
    
    return (
        <Link to={{pathname: `/movies/${Title}`, state: {movieDetails}}} className={`layout-item ${Title}`}>
            <div>
                <img src={Poster} className='movie-poster' alt={Title} style={{'width' : '200px' ,'height' : ' 200px'}} />
            </div>
            <div className="movie-details">
                <p className="grid-title">{Title}</p>
            </div>
        </Link>
    )
}

export default layout;