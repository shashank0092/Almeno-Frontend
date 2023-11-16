
export const likecourse=async(cid)=>{
    
   
    const liked=await fetch(`https://almeno-backend.onrender.com/v0/likecourse`,{
        method:"post",
        mode:'cors',
        headers: {
            'Content-Type': 'application/json', // Example: specifying JSON content
            'Accept': 'application/json',
          },
        body:JSON.stringify({
            cid:cid
        })
        
        
    })

    const likecourse=await liked.json()
    const genratedLike=await likecourse;
    
    

    
    
    return genratedLike;
}