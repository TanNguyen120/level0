import React from 'react'
import Button from 'react-bootstrap/Button'

const AddJokeButton = ({ addJokeClick }) => {
    return (
        <Button variant="success" onClick={addJokeClick}> Add </Button>
    )
}

export default AddJokeButton