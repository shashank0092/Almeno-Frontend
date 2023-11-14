import { useLocation } from "react-router-dom";

import CourseDataDisplay from "../../components/CourseDataDisplay";




const CourseDetails = () => {

    const loaction = useLocation()
    const id = loaction.state?.data
    console.log(id, "this is a course id")
    return (
        <>
           <CourseDataDisplay/>
        </>
    )
}

export default CourseDetails;