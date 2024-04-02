import React from 'react'

const PersonList = ({ people }) => {
    return(
        <div>
            <h2>Lista de Pessoas: </h2>
            <ul>
                {people.map((person, index) =>(
                    <li key={index}>{person.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PersonList