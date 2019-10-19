import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return(
        <div className='footer'>
            <div className="footer-links-div">
                <Container>
                    <Row>
                        <Col md={3}><a href='#'>FAQ</a></Col>
                        <Col md={3}><a href='#'>Help Center</a></Col>
                        <Col md={3}><a href='#'>Account</a></Col>
                        <Col md={3}><a href='#'>Media Center</a></Col>
                    </Row>
                    <Row>
                        <Col md={3}><a href='#'>Investor Relations</a></Col>
                        <Col md={3}><a href='#'>Jobs</a></Col>
                        <Col md={3}><a href='#'>Ways to Watch</a></Col>
                        <Col md={3}><a href='#'>Terms of Use</a></Col>
                    </Row>
                    <Row>
                        <Col md={3}><a href='#'>Privacy</a></Col>
                        <Col md={3}><a href='#'>Cookie Preferences</a></Col>
                        <Col md={3}><a href='#'>Corporate Information</a></Col>
                        <Col md={3}><a href='#'>Contact Us</a></Col>
                    </Row>
                    <Row>
                        <Col md={3}><a href='#'>Speed Test</a></Col>
                        <Col md={3}><a href='#'>Legal Notices</a></Col>
                        <Col md={3}><a href='#'>Netflix Originals</a></Col>
                    </Row>
                </Container> 
            </div>
        </div>
    )
}

export default Footer;