import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Advertise = () => {
    return(
        <>
            <div className='advertisment-div'>
                <Container>
                    <Row>
                        <Col md={6}>
                                <img alt="" className="img-banner" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img" />
                        </Col>
                        <Col md={6}>
                            <div className="advertismentText">
                                <h1 className='white-text '>Download your programmes to watch on the go.</h1>
                                <h2 className='white-text'>Save your data and watch all your favourites offline.</h2>
                                <br></br>
                                <Button variant="outline-light">TRY 30 DAYS FREE</Button>
                            </div>
                        </Col>
                    </Row>
                </Container> 
            </div>
            <div className='advertisment-div'>
                <Container>
                    <Row>
                        <Col md={6}>
                        <div className="our-story-card-boxshot-background">
                            <img alt="" className="img-banner" src="https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABZQ26GahaM-vk6werRTr62Z7gkdqIreQmHR8mJArj_G-TgLBLWr1GIAOyXE2JUVGnH45q-9XOQxrhKAvVpfdfZLlC1GRcH-HVQiRNLpM2dU0Xy66xwK5UlLp8LtenA.jpg?r=f99" />
                        </div>
                        </Col>
                        <Col md={6}>
                            <div className="advertismentText">
                                <h1 className='white-text '>Watch the highly anticipated new series.</h1>
                                <h2 className='white-text'>Enjoy the very first episode of Bard of Blood and join the conversation today.</h2>
                                <br></br>
                                <Button variant="outline-light">WATCH NOW </Button>
                            </div>
                        </Col>
                    </Row>
                </Container> 
            </div>
        </>
    )
}

export default Advertise;