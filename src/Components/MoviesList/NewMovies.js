import React from 'react';
import MoviesLayout from './MoviesLayout';

const NewMovies = (props) => {
    return (
        <div className="panel new-movies">
            <p className="panel-title">New Movies</p>
            <div>
                {Object.keys(props.movies).map(key => {
                    return (
                        <MoviesLayout key={key}
                            movieDetails={props.movies[key]}
                            index={key}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default NewMovies;
