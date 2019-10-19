import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MovieDetails = (props) => {
    console.log(props.location.state);
    const { Year, Title,Type,imdbID,Poster} = props.location.state.movieDetails;
    
    const backButtonHandler = () => {
        props.history.push('/');
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col> <img src={Poster} alt={`${Title} Poster`} className= 'detailsImage'/></Col>
                    <Col>
                        <div className="movieInfo">
                            <h1 className='movie-title'>{Title}</h1>
                            <p className='white-text'><strong>Type: </strong>{Type}</p>
                            <p className='white-text'><strong>Imdb Id: </strong>{imdbID}</p>
                            <p className='white-text'><strong>Year: </strong>{Year}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        <Button variant='outline-light' onClick={backButtonHandler} className='backButton'>Back</Button>
        </div>
    )
}

export default MovieDetails;