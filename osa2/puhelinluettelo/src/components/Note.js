const Note = ({person, number, deletePerson}) => {
    return (
        <li>{person} {number} <button onClick={() => deletePerson(person.id)}>Delete</button></li>
    )
}

export default Note