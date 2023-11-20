
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


inputDay.addEventListener('input', (event) => {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    console.log(inputValue)
})

inputMonth.addEventListener('input', (event)=>{
let inputValue = event.target.value;
event.target.value = inputValue.replace(/[^0-9]/g, '');
})

inputYear.addEventListener('input', (event)=>{
let inputValue = event.target.value;
event.target.value = inputValue.replace(/[^0-9]/g, '');
if(inputValue > currentYear){
    inputYear.style.border = '1px solid red'
}
})

//SUBMIT CLICK
submitButton.addEventListener('click', () => {
    // User's typed Values
    let inputMonthValue = parseInt(inputMonth.value, 10) - 1; // Month is 0-indexed
    let inputYearValue = parseInt(inputYear.value, 10);
    let inputDayValue = parseInt(inputDay.value, 10);

    if (isNaN(inputYearValue) || isNaN(inputMonthValue) || isNaN(inputDayValue)) {
        // Handle the case where any input is NaN (e.g., display an error or set to a default value)
        inputDay.style.border = '1px solid red';
        outputDay.innerHTML = '--';

        inputMonth.style.border = '1px solid red'
        outputMonth.innerHTML = '--';

        inputYear.style.border = '1px solid red'
        outputYear.innerHTML = '--';
    } else {
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
    }
});





// Once i put everything in miliseconds everything was better....

    
    // if(inputDayValue > 31 || inputDayValue < 1){
    //     submitButton.disabled = true;
    //     outputYear.innerHTML = '--'
    //     outputMonth.innerHTML = '--'
    //     outputDay.innerHTML = '--'
    //     inputDay.style.border = '1px solid red';
    //     return
    // }else {
    //     inputDay.style.border = '';
    // };

    // console.log('Before if statement for month');

    // if(inputMonthValue > 12 || inputMonthValue < 1){
    //     submitButton.disabled = true;
    //     outputYear.innerHTML = '--'
    //     outputMonth.innerHTML = '--'
    //     outputDay.innerHTML = '--'
    //     inputMonth.style.border = '1px solid red';
    //     return
    // } else {
    //     inputMonth.style.border = '';
    // };
    