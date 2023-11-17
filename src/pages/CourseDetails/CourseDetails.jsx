import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import CourseDataDisplay from "../../components/CourseDataDisplay";

import { FetchCourseInfo } from "./api/CourseInfoAPI";

import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";




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
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default CourseDetails;