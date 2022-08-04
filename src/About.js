import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
        <>
            <Row>
                <Col sm={3}>
                    <img src={"/logo.png"} width="100" height="50" />
                </Col>
                <Col sm={9}>
                    <h1>About WHAT NOW</h1>
                </Col>
            </Row>
        </>
    )
}

export default About