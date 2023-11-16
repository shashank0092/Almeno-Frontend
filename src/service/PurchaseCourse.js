
export const PurchaseCourse=async(sid,cid)=>{
    
    console.log("this is student->",sid)
    console.log("this is course->",cid)
   
    const coursePurchase=await fetch(`https://almeno-backend.onrender.com/v0/enrollcourse`,{
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

    const createPurchase=await coursePurchase.json()
    const genratedPurchase=await createPurchase;
    
    

    
    
    return genratedPurchase;
}