export const FetchCourseList=async(page,limit)=>{
    const data=await fetch(`https://almeno-backend.onrender.com/v0/courselist?page=${page}&limit=${limit}`,{
        method:"get",
        mode:'cors',
        
    })

    const courseData=await data.json()
    const courseList=await courseData;
    console.log(`runnig for shukla`,page,limit)
    console.log(courseList,"this is data ")
    return courseList;
}