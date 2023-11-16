
export const CompleteCourse=async(sid,cid)=>{
    
    console.log("this is student->",sid)
    console.log("this is course->",cid)
   
    const coursePurchase=await fetch(`https://almeno-backend.onrender.com/v0/coursedone`,{
        method:"post",
        mode:'cors',
        headers: {
            'Content-Type': 'application/json', // Example: specifying JSON content
            'Accept': 'application/json',
          },
        body:JSON.stringify({
            sid:sid,
            cid:cid
        })
        
        
    })

    const completeCourse=await coursePurchase.json()
    const genratedCompleteCourse=await completeCourse;
    
    

    
    
    return genratedCompleteCourse;
}