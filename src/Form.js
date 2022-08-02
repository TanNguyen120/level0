import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddJokeButton from './AddJokeButton';
const Form = ({ saveJokeInput, addJokeFunction }) => {
    return (
        <Row>
            <Row>
                <Col sm={1}>
                    <label htmlFor="jokeInput">New Joke:</label>
                </Col>
                <Col>
                    <input className='jokeInput' type="text" onChange={saveJokeInput} />
                </Col>
            </Row>
            <Row>
                <Col sm={1}>
                    <AddJokeButton addJokeClick={addJokeFunction} />
                </Col>
            </Row>
        </Row>
    )
}

export default Form