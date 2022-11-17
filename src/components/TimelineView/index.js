import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    const courseList = timelineItemsList.map(
      each => each.categoryId === 'COURSE',
    )
    const projectList = timelineItemsList.map(
      each => each.categoryId === 'PROJECT',
    )

    return (
      <div className="timeline-view-container">
        <h1>MY JOURNEY OF CCBP 4.0</h1>
        <div className="chrono-container">
          <Chrono mode="VERTICAL_ALTERNATING">
            {timelineItemsList.map(each => (
              <>
                {each.categoryId === 'COURSE' && (
                  <CourseTimelineCard key={each.id} courseList={each} />
                )}

                {each.categoryId === 'PROJECT' && (
                  <ProjectTimelineCard key={each.id} projectList={each} />
                )}
              </>
            ))}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
