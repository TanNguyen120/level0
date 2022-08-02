import React from 'react'

const Jokes = ({ jokes }) => {
    return (
        <>
            {jokes.map((joke) => <h2>{joke}</h2>)}
        </>
    )
}

export default Jokes