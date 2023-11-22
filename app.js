//displaying errors
const displayErrMsg = (elementId, message) =>{
    const errElement = document.getElementById(elementId);
    errElement.textContent = message;
    errElement.style.color = 'red'

}

// removing errors
const clearErrMsg = () =>{
    const errIds = [
        'day-err',
        'month-err',
        'year-err',
        'global-error'
    ]
    
    errIds.forEach((id) =>{
        const errElement = document.getElementById(id)
        errElement.textContent = '';
    })
    
    inputYear.style.border = '';
    inputMonth.style.border = '';
    inputDay.style.border = '';
    
}
//Current Date
const date = new Date();

let currentDay = String (date.getDate()).padStart(2, '0');//The padStart is what adds a '0' before each single int. So its is 01,02,03 etc
let currentMonth = String(date.getMonth()+1).padStart(2, '0') // As it indexes from zero a 1 is required. 
let currentYear = String(date.getFullYear());

let today = currentDay+ '/'+currentMonth+ '/'+currentYear; // gets todays date

//Input Values Output

let outputDay = document.getElementById('input-display-day');
let outputMonth = document.getElementById('input-display-month');
let outputYear =document.getElementById('input-display-year');

const inputDay = document.getElementById('input-date-day');

inputDay.addEventListener('input', (event) => {
    const dayErr = document.getElementById('day-err')
    dayErr.innerHTML = '';
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    if(event.target.value > 31){
        outputDay.innerHTML = '--';
        displayErrMsg('day-err', 'Between 1 - 31')
        event.target.style.border = '1px solid red'
        console.log(event.target.value)
    }else {
        event.target.style.border = '';
    }

})

const inputMonth = document.getElementById('input-date-month');

inputMonth.addEventListener('input', (event)=>{
    const monthErr = document.getElementById('month-err')
    monthErr.innerHTML = '';
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    if(event.target.value > 12){
        outputMonth.innerHTML = '--';
        displayErrMsg('month-err', 'Only months 1 - 12')
        event.target.style.border = '1px solid red'
    }else {
        event.target.style.border = '';
    }

})

const inputYear = document.getElementById('input-date-year');

inputYear.addEventListener('input', (event)=>{
    const yearErr = document.getElementById('year-err')
    yearErr.innerHTML = '';
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    if(event.target.value > currentYear){
        outputYear.innerHTML = '--';
        displayErrMsg('year-err', 'Can\'t be in the future.')
        event.target.style.border = '1px solid red'
    } else {
        event.target.style.border = '';
    }

})

//SUBMIT CLICK
const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', () => {
    clearErrMsg()
    // User's typed Values
    let inputMonthValue = parseInt(inputMonth.value, 10) - 1; // Month is 0-indexed
    let inputYearValue = parseInt(inputYear.value, 10);
    let inputDayValue = parseInt(inputDay.value, 10);

    if(inputDay.value > 31 || inputMonth.value > 12 || inputYear.value > currentYear){
        clearErrMsg();
        outputDay.innerHTML = '--';
        displayErrMsg('global-error', 'Incorrect date');
        inputDay.style.border = '1px solid red';
        inputMonth.style.border = '1px solid red';
        inputYear.style.border = '1px solid red';
    
        // Set a timeout to clear message after 6 seconds
        setTimeout(() => {
            clearErrMsg('global-error');
        }, 6000);
    
        return;
    }
    
    if (isNaN(inputYearValue) || isNaN(inputMonthValue) || isNaN(inputDayValue)) {
        // Handle the case where any input is NaN (e.g., display an error or set to a default value)
        if(isNaN(inputYearValue)){
            displayErrMsg('year-err','cannot be blank' )
        }
        if(isNaN(inputMonthValue)){
            displayErrMsg('month-err','cannot be blank' )
        }
        if(isNaN(inputDayValue)){
            displayErrMsg('day-err','cannot be blank' )
        }
        
        
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


