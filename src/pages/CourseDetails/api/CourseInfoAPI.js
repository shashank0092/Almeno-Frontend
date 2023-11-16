export const FetchCourseInfo=async(cid)=>{
   
    const data=await fetch(`https://almeno-backend.onrender.com/v0/courseinfo?cid=${cid}`,{
        method:"get",
        mode:'cors',
        
    })

    const courseData=await data.json()
    const courseInfo=await courseData;
    
    return courseInfo;
}