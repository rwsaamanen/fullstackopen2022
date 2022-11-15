import Part from './parts/Part'

const Content = ({content}) => {
    console.log({content})
    return (
        <div>
          {content.map(({ name, exercises, id }) => (
            <Part key={id} name={name} exercises={exercises} />
          ))}
      </div>
    )
}
  
export default Content