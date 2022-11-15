const PersonForm = (props) => {
    console.log(props)
    return (
        <form onSubmit = {props.onSubmit}>
            <div>Name: <input value = {props.name} onChange = {props.onChangeName} /></div>
            <div>Number: <input value = {props.number} onChange = {props.onChangeNumber} /></div>
            <div><button type="submit">Add</button></div> 
        </form>
    )
} 

export default PersonForm