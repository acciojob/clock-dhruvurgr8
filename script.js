const timer = document.querySelector('#timer');

setInterval(() => {
    let current = new Date();
    let date = current.getDate();
    let month = current.getMonth() + 1; // Months are zero-based, so add 1
    let year = current.getFullYear();
    let hours = current.getHours();
    let minutes = current.getMinutes();
    let seconds = current.getSeconds();

    // Determine AM or PM
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Set 12 for midnight

    // Formatting with leading zeros
    let formattedDate = `${addLeadingZero(month)}/${addLeadingZero(date)}/${year}`;
    let formattedTime = `${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)} ${ampm}`;

    timer.textContent = `${formattedDate}, ${formattedTime}`;
}, 1000);

// Function to add a leading zero for single-digit values
function addLeadingZero(value) {
    return value < 10 ? '0' + value : value;
}