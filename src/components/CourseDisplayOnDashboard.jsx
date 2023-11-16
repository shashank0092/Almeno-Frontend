import { useEffect, useState } from "react";
import { convertDate } from "../service/ConvertInDate";
import { useSelector } from "react-redux";
import { CompleteCourse } from "../service/CompleteCourse";


const CourseDisplayOnDashboard = ({ EnrolledCourse }) => {
  const value = useSelector((state) => state?.userDetails);
  console.log(value, "this is redux value");
  console.log(EnrolledCourse, "this is it");

  return (
    <>
      {
      
      EnrolledCourse?.data?.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))
      

      
      }
    </>
  );
};

const CourseCard = ({ course }) => {
  const userDetails = useSelector((state) => state?.userDetails);
  console.log(userDetails, "this is redux value");
  const sid=userDetails?.userInfo?.data?._id
  const cid=course?.cid

  const [dueDate, setDueDate] = useState();
  const markComplete=async()=>{
    const data=await CompleteCourse(sid,cid)
    alert(data?.message)
    console.log(data)
  }

  useEffect(() => {
    const time = convertDate(parseInt(course?.duration));
    setDueDate(time);
   
  }, [course]); 

  return (
    <div className="flex flex-row items-center justify-around  py-10 border border-black rounded-3xl bg-gray-200 hover:bg-gray-400">
      <div className="h-1/3 w-1/12 xsm:1/2 xsm:w-1/4">
        <img src={course?.thumbnail} alt="logo-image" />
      </div>
      <div>
        <div>
          <p className="text-2xl font-bold xsm:text-lg">{course?.name}</p>
        </div>
        <div>
          <p className="text-xl font-semibold xsm:text-base ">{course?.instructor}</p>
        </div>
        <div>
          <p className="text-lg font-medium xsm:text-sm">{dueDate}</p>
        </div>
      </div>
      <div>
        <div className="border border-black bg-green-800 py-3 px-3 font-bold rounded-lg text-white hover:cursor-pointer xsm:mr-3 xsm:px-1 xsm:rounded-full xsm:font-medium xsm:py-3" onClick={()=>markComplete()} >
          <p  >MarkCompleted</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDisplayOnDashboard;
