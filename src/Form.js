import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddJokeButton from './AddJokeButton';
const Form = ({ saveJokeInput, addJokeFunction, showForm }) => {
    const show = showForm ? 'block' : 'none';
    const style = {
        backgroundColor: 'gray',
        padding: '1.5rem',
        borderRadius: '1rem',
        marginLeft: '1rem',
        marginRight: '1rem',
        showForm: show
    };
    return (
        showForm && (<Row style={style}>

            <Row>
                <Col sm={1}>
                    <label htmlFor="jokeInput">New Joke:</label>
                </Col>
                <Col>
                    <textarea className='jokeInput' type="text" onChange={saveJokeInput} rows={4} cols={40} />
                </Col>
            </Row>
            <Row>
                <Col sm={1}>
                    <AddJokeButton addJokeClick={addJokeFunction} />
                </Col>
            </Row>
        </Row>
        )
    )
}

export default Form