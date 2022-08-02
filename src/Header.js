import React from 'react'
import './index.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';


const Header = ({ addJokeClick }) => {
    return (
        <Row>
            <Col sm={2}>
                <h1 style={headerStyle}>My Joke</h1>
            </Col>
        </Row>
    )
}

const headerStyle = {
    marginRight: '1rem'
}
export default Header