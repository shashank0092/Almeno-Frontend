export const FetchEnrolledCourseList = async (sid) => {
    const data = await fetch("https://almeno-backend.onrender.com/v0/enrolledcourse", {
        method: "post",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json', // Example: specifying JSON content
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            sid:sid
        })

    })

    const EnrolledcourseData = await data.json()
    const EnrolledcourseList = await EnrolledcourseData;

    return EnrolledcourseList;
}