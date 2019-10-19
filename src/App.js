import React from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import {BrowserRouter as Router , Route , Switch , Redirect} from 'react-router-dom';
import HomePage from './Components/Layout/Home';
import MovieDetails from './Components/MoviesList/MovieDetails';
import FallBack from './Components/fallBackPage';
import Advertise from './Components/Layout/advertise';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <div className='route-wrapper'>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies/:movieId" component={MovieDetails} />
            <Route exact path="/fallbackPage" component={FallBack} />
            <Redirect from='*' to='/'></Redirect>
          </Switch>
        </div>
        <Advertise></Advertise>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
