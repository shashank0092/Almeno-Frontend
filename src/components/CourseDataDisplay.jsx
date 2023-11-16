import { useSelector } from "react-redux";
import { PurchaseCourse } from "../service/PurchaseCourse";
import CourseSyallabus from "./CourseSyallabus";


const CourseDataDisplay = ({ coursesInfo }) => {

    console.log(coursesInfo, "this is given by api")
    const userData = useSelector(state => state?.userDetails)
    const userEmail = userData?.userInfo?.data?.email;


    const buycourse = async () => {
        const sid = userData?.userInfo?.data?._id
        const cid = coursesInfo?.data[0]?.cid
        
        const data = await PurchaseCourse(sid, cid)
        alert(data?.message)
        console.log(data);
    }


    return (
        <>
            <div className="h-full w-full flex flex-col justify-center items-center gap-10" >
                <div className=" flex justify-center xsm:h-1/2 xsm:w-1/2  mt-5 " >
                    <img src={coursesInfo?.data[0]?.thumbnail} />
                </div>
                <div className="border border-black flex flex-col gap-5   sm:px-64 sm:py-32 rounded-xl xsm:py-0 xsm:px-0 xsm:justify-center  " >
                    <div >
                        <p className="underline text-center text-7xl font-bold xsm:text-2xl " >{coursesInfo?.data[0]?.name}</p>
                    </div>
                    <div className=" px-64  py-28 flex flex-col gap-5 xsm:py-0 xsm:px-0 xsm:ml-5" >
                        <div className="flex" >
                            <p className="text-xl underline font-bold xsm:text-base " >Course Id:&nbsp; </p>
                            <p className="text-xl xsm:text-base"> {coursesInfo?.data[0]?.cid}</p>
                        </div>
                        <div className="flex" >
                            <p className="text-xl underline font-bold xsm:text-base" >Instructor Name:&nbsp; </p>
                            <p className="text-xl xsm:text-base"> {coursesInfo?.data[0]?.instructor}</p>
                        </div>
                        <div className="flex">
                            <p className="text-xl underline font-bold xsm:text-base">Description:&nbsp;</p>
                            <p className="text-xl xsm:text-base">{coursesInfo?.data[0]?.description}</p>
                        </div>
                        <div className="flex">
                            <p className="text-xl underline font-bold xsm:text-base">Enrollment Status:&nbsp;</p>
                            <p className="text-xl xsm:text-base">{coursesInfo?.data[0]?.enrollmentStatus}</p>
                        </div>
                        <div className="flex">
                            <p className="text-xl underline font-bold xsm:text-base">Course Duration:&nbsp;</p>
                            <p className="text-xl xsm:text-base">{coursesInfo?.data[0]?.duration}</p>
                        </div>
                        <div className="flex">
                            <p className="text-xl underline font-bold xsm:text-base">Course Schedule:&nbsp;</p>
                            <p className="text-xl xsm:text-base">{coursesInfo?.data[0]?.schedule}</p>
                        </div>
                        <div className="flex">
                            <p className="text-xl underline font-bold xsm:text-base">Course Location:&nbsp;</p>
                            <p className="text-xl xsm:text-base">
                                {coursesInfo?.data[0]?.location}
                            </p>
                        </div>
                        <div className="flex">
                            <p className="text-xl underline font-bold xsm:text-base">Course Prerequisites:&nbsp;</p>
                            <div className="flex" >
                                {
                                    coursesInfo?.data[0]?.prerequisites.map((require) => {
                                        return (
                                            <>
                                                <p key={coursesInfo?.data[0]?.cid} className="text-xl text-center xsm:text-base">&nbsp; {require}</p>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex flex-col gap-5" >
                            <p className="text-xl  underline font-bold xsm:text-base">
                                Syllabus:
                            </p>
                            <div>
                                <CourseSyallabus coursesInfo={coursesInfo} />
                            </div>
                        </div>
                    </div>

                    {
                        userEmail == null ? (<></>) :
                            (<>
                                <div>
                                    <div className="border border-black rounded-lg py-5 bg-green-400 hover:cursor-pointer" onClick={() => buycourse()} >
                                        <p className="text-center text-white font-bold" >Buy Course</p>
                                    </div>
                                </div>
                            </>)
                    }
                </div>
            </div>
        </>
    )
}

export default CourseDataDisplay;