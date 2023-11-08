//FML

//Age calculator
// get todays date EXACT 
// 3 input fields- Day- Month- Year.

//getDate()
//setDate()

const date = new Date();

let currentDay = String (date.getDate()).padStart(2, '0');//The padStart is what adds a '0' before each single int. So its is 01,02,03 etc
let currentMonth = String(date.getMonth()+1).padStart(2, '0') // As it indexes from zero a 1 is required. 
let currentYear = String(date.getFullYear());

let today = currentDay+ '/'+currentMonth+ '/'+currentYear; // gets todays date




// X years = 2023 (current year) - 1994(birth year) = 29 years
// Y months = 11 (current month) - 6(birth month) = 5 months- minus 1 month so i have to carry over to days.
// Z days = 8 (current day) - 15 (birth day) = -7 then i have to plus 31 so then its 24

const inputDateDay = document.getElementById('input-date-day');
const inputDateMonth = document.getElementById('input-date-month');
const inputDateYear = document.getElementById('input-date-year');

const submitButton = document.getElementById('submit-btn');

inputDateDay.addEventListener('input', (event) => {
    
})



const onSubmit = () =>{

}