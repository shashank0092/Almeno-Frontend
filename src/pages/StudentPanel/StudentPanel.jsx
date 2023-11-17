import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import {FetchEnrolledCourseList} from "./api/Enrolledcourses"

import Navbar from "../../layouts/Navbar"
import Footer from "../../layouts/Footer"

import CourseDisplayOnDashboard from "../../components/CourseDisplayOnDashboard"


const StudentPanel = () => {
    const loaction = useLocation()
    const value = loaction.state.data
    




    const[EnrolledCourse,setEnrolledCourse]=useState();



    const FetchCourses=async()=>{
        const courses=await FetchEnrolledCourseList(value?.userInfo?.data?._id)
        setEnrolledCourse(courses)
        
    }

    

    useEffect(()=>{
        FetchCourses()
    },[])
    return (
        <>
           <div>
           <div>
                <Navbar />
            </div>
            <div className="flex flex-col gap-5 pl-5 sm:mx-20" >
                <div>
                    <div  >
                        <p className="text-center text-6xl font-bold xsm:text-3xl xsm:py-5  " >Student Dashboard</p>
                    </div>
                </div>

                <div className="px-52 py-16 flex flex-col gap-5 xsm:px-0 xsm:py-0 " >
                    <div className="flex " >
                        <p className="text-3xl font-semibold xsm:text-lg " >Name:</p>
                        <p className="text-3xl font-semibold xsm:text-lg " >{value?.userInfo?.data?.name}</p>
                    </div>
                    <div className="flex" >
                        <p className="text-3xl font-semibold xsm:text-lg" >Email:</p>
                        <p className="text-3xl font-semibold xsm:text-lg">{value?.userInfo?.data?.email}</p>
                    </div>
                    <div className="flex" >
                        <p className="text-3xl font-semibold xsm:text-lg">Studnet ID: </p>
                        <p className="text-3xl font-semibold xsm:text-lg">{value?.userInfo?.data?._id}</p>
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


                <div>
                    <Footer/>
                </div>
            </div>
           </div>
        </>
    )
}

export default StudentPanel;