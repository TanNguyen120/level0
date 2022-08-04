import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const JokeCard = ({ jokeContent }) => {
    return (
        <Col sm={4}>
            <Card style={{ width: '18rem', margin: '2rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/100" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text style={{ color: 'black' }}>
                        {jokeContent}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default JokeCard