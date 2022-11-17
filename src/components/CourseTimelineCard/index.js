import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseList} = props
  const {courseTitle, title, description, duration, tagsList, name} = courseList
  console.log(courseList)

  return (
    <div className="course-container">
      <div>
        <h4>{courseTitle}</h4>
        <AiFillClockCircle />
        <p>{duration}</p>
      </div>
      <p>{name}</p>
      <p>{title}</p>
      <p>{description}</p>
      <ul>
        {tagsList.map(each => (
          <li>{each.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
