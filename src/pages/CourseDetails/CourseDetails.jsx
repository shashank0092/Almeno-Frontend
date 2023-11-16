import { useLocation } from "react-router-dom";
import CourseDataDisplay from "../../components/CourseDataDisplay";
import { FetchCourseInfo } from "./api/CourseInfoAPI";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../layouts/Navbar";




const CourseDetails = () => {

    const loaction = useLocation()
    const cid = loaction.state?.data


    const [coursesInfo, setCoursesInfo] = useState()
    const CourseInfo = async () => {
        const data = await FetchCourseInfo(cid)
        setCoursesInfo(data)

    }
    useEffect(() => {
        CourseInfo()
    }, [])
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <CourseDataDisplay coursesInfo={coursesInfo} />
            </div>
        </>
    )
}

export default CourseDetails;