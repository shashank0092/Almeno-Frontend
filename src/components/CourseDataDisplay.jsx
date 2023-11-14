import { coursedata } from "../utillls/CourseModel";
import CourseSyallabus from "./CourseSyallabus";


const CourseDataDisplay = () => {
    return (
        <>
            <div className="h-full w-full flex flex-col justify-center items-center" >
                <div className="h-1/5 w-1/5 xsm:h-1/2 xsm:w-1/2  " >
                    <img src={coursedata[0].thumbnail} />
                </div>
                <div className="border border-black flex flex-col gap-5 px-64  py-28 rounded-xl xsm:py-0 xsm:px-0 xsm:justify-center  " >
                    <div >
                        <p className="underline text-center text-7xl font-bold xsm:text-2xl " >{coursedata[0].name}</p>
                    </div>
                    <div className=" px-64  py-28 flex flex-col gap-5 xsm:py-0 xsm:px-0 xsm:ml-5" >
                        <div className="flex" >
                            <p className="text-xl underline font-bold xsm:text-base " >Course Id:&nbsp; </p>
                            <p className="text-xl xsm:text-base"> {coursedata[0].id}</p>
                        </div>
                        <div className="flex" >
                            <p className="text-xl underline font-bold xsm:text-base" >Instructor Name:&nbsp; </p>
                            <p className="text-xl xsm:text-base"> {coursedata[0].instructor}</p>
                        </div>
                        <div className="flex">
                            <p className="text-xl underline font-bold xsm:text-base">Description:&nbsp;</p>
                            <p className="text-xl xsm:text-base">{coursedata[0].description}</p>
                        </div>
                        <div className="flex">
                            <p className="text-xl underline font-bold xsm:text-base">Enrollment Status:&nbsp;</p>
                            <p className="text-xl xsm:text-base">{coursedata[0].enrollmentStatus}</p>
                        </div>
                        <div className="flex">
                            <p className="text-xl underline font-bold xsm:text-base">Course Duration:&nbsp;</p>
                            <p className="text-xl xsm:text-base">{coursedata[0].duration}</p>
                        </div>
                        <div className="flex">
                            <p className="text-xl underline font-bold xsm:text-base">Course Schedule:&nbsp;</p>
                            <p className="text-xl xsm:text-base">{coursedata[0].schedule}</p>
                        </div>
                        <div className="flex">
                            <p className="text-xl underline font-bold xsm:text-base">Course Location:&nbsp;</p>
                            <p className="text-xl xsm:text-base">
                                {coursedata[0].location}
                            </p>
                        </div>
                        <div className="flex">
                            <p className="text-xl underline font-bold xsm:text-base">Course Prerequisites:&nbsp;</p>
                            <div className="flex" >
                                {
                                    coursedata[0].prerequisites.map((require) => {
                                        return (
                                            <>
                                                <p className="text-xl text-center xsm:text-base">&nbsp; {require}</p>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <p className="text-xl underline font-bold xsm:text-base">
                                Syllabus:
                            </p>
                            <div>
                                <CourseSyallabus />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDataDisplay;