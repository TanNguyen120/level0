import React from 'react'
import './index.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { MdExpandMore } from 'react-icons/md';


const Header = ({ showFormFunction }) => {
    return (
        <Row>
            <Col sm={2}>
                <h1 style={headerStyle}>My Joke</h1>

            </Col>
            <Col sm={1}>
                <Button variant="success" onClick={showFormFunction}><MdExpandMore /></Button>
            </Col>
            <Col sm={{ span: 2, offset: 7 }}>
                <img src={"/logo.png"} width="100" height="50" />
            </Col>
        </Row>
    )
}

const headerStyle = {
    marginRight: '1rem'
}
export default Header 