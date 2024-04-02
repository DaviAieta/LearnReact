import React from 'react'
import { ListGroup } from 'react-bootstrap'

// CSS
import '../person.css'

const PersonList = ({ people }) => {
    return(
        <div className='person-list'>
            <h2>Lista de Pessoas: </h2>
            <ListGroup>
                {people.map((person, index) =>(
                    <ListGroup.Item key={index}>{person.name}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default PersonList