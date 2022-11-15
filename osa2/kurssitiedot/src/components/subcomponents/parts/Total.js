const Total = ({total}) => {
    console.log({total})
    const totalCount = total.reduce((total, currenvalue) => total = total + currenvalue.exercises,0)
    return (
        <p>
            <strong>Total of {totalCount} exercises</strong>
        </p>
    )
}
export default Total