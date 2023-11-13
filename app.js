

//Months defined
const january = 31;
const february = 28;
const march = 31;
const april = 30;
const may = 31;
const june = 30;
const july = 31;
const august = 30;
const september = 31;
const october = 31;
const november = 30;
const december = 31;

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
const outputDayValue = outputDay.value;
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

    if(inputYearValue > currentYear){
        inputYear.style.border = '1.5px solid red';
    }

    if(inputMonthValue > currentMonth ){
        outputMonth = outputMonth - 1;
        //DONE-works fine. Red color for past. ERROR NEEDED 
    }

    // if(currentMonth < inputMonthValue){

    // }

})
// X years = 2023 (current year) - 1994(birth year) = 29 years
// Y months = 11 (current month) - 6(birth month) = 5 months- minus 1 month so i have to carry over the days.
// Z days = 8 (current day) - 15 (birth day) = -7 then i have to plus 31 so then its 24


// Certainly! Let's use an example where the birth month is later in the year than the current month, resulting in a negative value for Y (months).

// Birthdate: September 20, 1990
// Current date: April 15, 2023
// X years = 2023 (current year) - 1990 (birth year) = 33 years.
// Y months = 4 (current month) - 9 (birth month) = -5 months. Since Y is negative, subtract 1 from X and add 12 to Y, making it 32 years and 7 months.
// Z days = 15 (current day) - 20 (birth day) = -5 days. Adjust by adding 30 (approximate days in a month), resulting in 25 days.
// So, in this case, the age would be 32 years, 7 months, and 25 days. This example illustrates how to handle the situation when Y (months) is negative.


// When dealing with negative days in the context of calculating age, the approach is 
// to typically add the exact number of days in the month you are borrowing from. 
// Different months have different numbers of days, so it's more accurate to use the 
// specific value for the month you are working with.

// For example:

// If you're in a month with 31 days and need to borrow days, you would add 31.
// If you're in a month with 30 days, you would add 30.
// If you're in February, you might add 28 or 29 days depending on whether it's a leap year or not.
// Using the exact number of days in the month provides a more precise adjustment in the age calculation.