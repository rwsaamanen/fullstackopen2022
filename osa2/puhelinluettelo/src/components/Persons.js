import Note from './Note'

const Persons = ({data}, {deletePersons}) => {
    return (
    <div>
        <Note key = {data.id} person = {data.name} number = {data.number} delete = {deletePersons}/>
    </div>
    )
}

export default Persons