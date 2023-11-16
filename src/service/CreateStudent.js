
export const CreateStudent=async(user)=>{
    
   
    const student=await fetch(`https://almeno-backend.onrender.com/v0/createstudent`,{
        method:"post",
        mode:'cors',
        headers: {
            'Content-Type': 'application/json', // Example: specifying JSON content
            'Accept': 'application/json',
          },
        body:JSON.stringify({
            name:user?.name,
            picture:user?.picture,
            email:user?.email
        })
        
        
    })

    const createStudent=await student.json()
    const genratedStudent=await createStudent;
    
    

    
    
    return genratedStudent;
}