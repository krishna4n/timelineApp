import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectList} = props
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
    title,
  } = projectList

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" />
      <div>
        <h4>{projectTitle}</h4>
        <AiFillCalendar />
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
