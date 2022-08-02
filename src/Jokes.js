import React from 'react'
import JokeCard from './JokeCard'

const Jokes = ({ jokes }) => {
    return (
        <>
            {jokes.map((joke) => <JokeCard jokeContent={joke} />)}
        </>
    )
}

export default Jokes