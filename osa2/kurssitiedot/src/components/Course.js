import Heading from './Heading'
import Header from './subcomponents/Header'
import Content from './subcomponents/Content'
import Total from './subcomponents/parts/Total'

const Course = ({courses}) => {
    console.log({courses})
    const header = 'Web development curriculum'
    return (
  <div>
      <Heading header = {header} />
        {courses.map(course =>
        <div key={course.id}>
        <Header header={course.name} />
        <Content content={course.parts}/>
        <Total total={course.parts}/>
      </div>
    )}
  </div>
)
}


export default Course