import CourseDetails from "./CourseDetails"

function PersonDetails() {
    return (
        <div>
            <h1>Ruti</h1>
            <h2>19.5</h2>
            <CourseDetails courseName="Drawing Class" grade={98} />
            <CourseDetails courseName="Math Class" grade={95} />        
        </div>
    )
}

export default PersonDetails