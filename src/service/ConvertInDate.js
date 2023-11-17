export const convertDate = (weeks) => {
    var today = new Date();


    var numberOfWeeksToAdd = weeks;
    today.setDate(today.getDate() + numberOfWeeksToAdd * 7);

    const dateString = today;

    
    const dateObject = new Date(dateString);

    
    const dateOnly = dateObject.toLocaleDateString();



    return dateOnly
}