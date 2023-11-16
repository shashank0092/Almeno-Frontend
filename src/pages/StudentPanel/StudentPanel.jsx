import { useLocation } from "react-router-dom"
import Navbar from "../../layouts/Navbar"
import {FetchEnrolledCourseList} from "./api/Enrolledcourses"
import { useEffect, useState } from "react"
import CourseDisplayOnDashboard from "../../components/CourseDisplayOnDashboard"
const StudentPanel = () => {
    const loaction = useLocation()
    const value = loaction.state.data
    console.log(value, "this is values")

    const[EnrolledCourse,setEnrolledCourse]=useState();
    const FetchCourses=async()=>{
        const courses=await FetchEnrolledCourseList(value?.userInfo?.data?._id)
        setEnrolledCourse(courses)
        console.log("this is enrolled courses",courses)
    }

    useEffect(()=>{
        FetchCourses()
    },[])
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <div>
                    <div  >
                        <p className="text-center text-6xl font-bold " >Student Dashboard</p>
                    </div>
                </div>

                <div className="px-52 py-16 flex flex-col gap-5" >
                    <div className="flex " >
                        <p className="text-3xl font-semibold" >Name:</p>
                        <p className="text-3xl font-semibold" >{value?.userInfo?.data?.name}</p>
                    </div>
                    <div className="flex" >
                        <p className="text-3xl font-semibold" >Email:</p>
                        <p className="text-3xl font-semibold">{value?.userInfo?.data?.email}</p>
                    </div>
                    <div className="flex" >
                        <p className="text-3xl font-semibold">Studnet ID: </p>
                        <p className="text-3xl font-semibold">{value?.userInfo?.data?._id}</p>
                    </div>
                    <div className="flex flex-col" >
                        <p className="text-3xl font-semibold">Listed Course: </p>
                        <div className="mt-5 " >
                            <div className="flex flex-col gap-5" >
                            <CourseDisplayOnDashboard EnrolledCourse={EnrolledCourse} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentPanel;