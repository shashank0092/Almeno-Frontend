export const convertDate = (weeks) => {
    var today = new Date();


    var numberOfWeeksToAdd = weeks;
    today.setDate(today.getDate() + numberOfWeeksToAdd * 7);

    const dateString = today;

    // Convert the string to a Date object
    const dateObject = new Date(dateString);

    // Get the date portion
    const dateOnly = dateObject.toLocaleDateString();



    return dateOnly
}