const Filter = (props) => {
    console.log(props)
    return (
        <div>Filter Shown With <input value = {props.value} onChange = {props.onChangeFilter} /></div>
    )
}



export default Filter