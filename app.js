// X years = 2023 (current year) - 1994(birth year) = 29 years
// Y months = 11 (current month) - 6(birth month) = 5 months- minus 1 month so i have to carry over the days.
// Z days = 8 (current day) - 15 (birth day) = -7 then i have to plus 31 so then its 24


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
const outputDay = document.getElementById('input-display-day');
// const outputDayValue = outputDay.value;
const outputMonth = document.getElementById('input-display-month');
const outputYear =document.getElementById('input-display-year');

//submit formula
submitButton.addEventListener('click', () =>{
    ////User's typed Values
let inputDayValue = inputDay.value;
let inputMonthValue = inputMonth.value;
let inputYearValue = inputYear.value;
    //Year result calculation
    const yearResult = currentYear - inputYearValue;
    outputDay.innerHTML = yearResult;

    //Month result calculation
    const monthResult = currentMonth - inputMonthValue;
    outputMonth.innerHTML = monthResult;

    //Day result calculation
    const dayResult = currentDay - inputDayValue;
    outputYear.innerHTML = dayResult;
    
    // if(){

    // }

})
