function CourseDetails(props) {
    return (
        <div>
            <h2>{props.courseName}</h2>
            <h3>{props.grade}</h3>
        </div>
    )
}

export default CourseDetails