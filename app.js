// const monthArr = [
//             {'1' : 31,},
//             {'2' : 28,},
//             {'3' : 31,},
//             {'4' : 30,},
//             {'5' : 31,},
//             {'6' : 30,},
//             {'7' : 31,},
//             {'8' : 30,},
//             {'9' : 31,},
//             {'10' : 31,},
//             {'11' : 30,},
//             {'12' : 31,},
// ]


//Current Date
const date = new Date();

let currentDay = String (date.getDate()).padStart(2, '0');//The padStart is what adds a '0' before each single int. So its is 01,02,03 etc
let currentMonth = String(date.getMonth()+1).padStart(2, '0') // As it indexes from zero a 1 is required. 
let currentYear = String(date.getFullYear());

let today = currentDay+ '/'+currentMonth+ '/'+currentYear; // gets todays date

//User Input fields
const inputDay = document.getElementById('input-date-day');
const inputMonth = document.getElementById('input-date-month');
const inputYear = document.getElementById('input-date-year');


const submitButton = document.getElementById('submit-btn');

//Input Values Output
let outputDay = document.getElementById('input-display-day');
let outputMonth = document.getElementById('input-display-month');
let outputYear =document.getElementById('input-display-year');


submitButton.addEventListener('click', () => {
    // User's typed Values
    let inputDayValue = parseInt(inputDay.value, 10);
    let inputMonthValue = parseInt(inputMonth.value, 10) - 1; // Month is 0-indexed
    let inputYearValue = parseInt(inputYear.value, 10);

    const currentDate = new Date();
    const birthDate = new Date(inputYearValue, inputMonthValue, inputDayValue); // Month is 0-indexed

    const currentDateMilliseconds = currentDate.getTime();
    const birthDateMilliseconds = birthDate.getTime();

    const differenceMilliseconds = currentDateMilliseconds - birthDateMilliseconds;

    // Convert milliseconds to years, months, and days
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const millisecondsInMonth = 30.44 * millisecondsInDay; // Approximate average month length
    const millisecondsInYear = 365.25 * millisecondsInDay; // Approximate average year length

    const years = Math.floor(differenceMilliseconds / millisecondsInYear);
    const remainingMilliseconds = differenceMilliseconds % millisecondsInYear;

    const months = Math.floor(remainingMilliseconds / millisecondsInMonth);
    const remainingDaysMilliseconds = remainingMilliseconds % millisecondsInMonth;

    const days = Math.floor(remainingDaysMilliseconds / millisecondsInDay);

    // Display or use the 'years', 'months', and 'days' variables as needed
    outputYear.innerHTML = years;
    outputMonth.innerHTML = months;
    outputDay.innerHTML = days;
});



// Once i put everything in miliseconds everything was better....