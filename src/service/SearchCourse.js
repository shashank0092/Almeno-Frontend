
export const SearchCourse=async(courseName,instructorName)=>{
    
   
   
    const data=await fetch(`https://almeno-backend.onrender.com/v0/searchcourse`,{
        method:"post",
        mode:'cors',
        headers: {
            'Content-Type': 'application/json', // Example: specifying JSON content
            'Accept': 'application/json',
          },
        body:JSON.stringify({
            courseName:courseName,
            instructorName:instructorName
        })
        
        
    })

    const searchCourses=await data.json()
    const genratedSearchCourse=await searchCourses;
    
    

    
    
    return genratedSearchCourse;
}