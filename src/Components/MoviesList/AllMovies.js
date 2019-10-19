import React,{Component} from 'react';
import NewMovies from './NewMovies';
import axios from 'axios';

class Sections extends Component{
    constructor(props){
        super(props)

        this.state = {
            movies : []
        }
    }

    componentDidMount = () => {
        if (localStorage.getItem('moviesList')) {
            this.fetchMoviesFromLocalStorage();
        } else {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        axios.get('https://www.omdbapi.com/?apikey=3380e6de&s=spider').then(movies => {
           this.setState({
               movies : movies.data.Search
           });
           localStorage.setItem('moviesList', JSON.stringify(movies.data.Search) + '@#@#-' + new Date());
        }).catch(err => {
            console.log(err);
        });
    }

    // fetching movies from local storage if the time difference is less than 5 hours
    fetchMoviesFromLocalStorage() {
        let previousDate = new Date((localStorage.getItem('moviesList')).split('@#@#-')[1]);
        let todayDate = new Date();
        const hoursDifference = this.timeDifference(todayDate, previousDate);

        if (hoursDifference < 5) { 
            this.setState({
                movies : JSON.parse((localStorage.getItem('moviesList')).split('@#@#-')[0])
            });
        } else {
            this.fetchMovies();
        }
    }

    timeDifference(date1, date2) {
        let difference = date1.getTime() - date2.getTime();
        let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
        difference -= daysDifference * 1000 * 60 * 60 * 24;
        let hoursDifference = Math.floor(difference / 1000 / 60 / 60);
        difference -= hoursDifference * 1000 * 60 * 60;
        let minutesDifference = Math.floor(difference / 1000 / 60);
        difference -= minutesDifference * 1000 * 60;

        return hoursDifference;
    }

    render() {
        return(
            <div className="movie-container">
                <div className="movie-sections">
                    <div className="section">
                        <NewMovies movies={this.state.movies}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sections;