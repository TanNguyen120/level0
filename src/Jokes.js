import React from 'react'
import JokeCard from './JokeCard'
import Row from 'react-bootstrap/Row';

const Jokes = ({ jokes }) => {
    return (
        <Row>
            {jokes.map((joke) => <JokeCard jokeContent={joke} />)}
        </Row>
    )
}

export default Jokes