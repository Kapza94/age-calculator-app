//FML

//Age calculator
// get todays date EXACT 
// 3 input fields- Day- Month- Year.

//getDate()
//setDate()

const date = new Date();

let day = String (date.getDate()).padStart(2, '0');//The padStart is what adds a '0' before each single int. So its is 01,02,03 etc
let month = String(date.getMonth()+1).padStart(2, '0') // As it indexes from zero a 1 is required. 
let year = String(date.getFullYear());

let today = day+ '/'+ month + '/' +year; // gets todays date




// To calculate someone's age in years, months, and days:

// Find the differences between the person's birth year/month/day and the current year/month/day:
// years = birth_year - current_year;
// months = birth_month - current_month; and
// day = birth_day - current_day.
// Replace them in the following formula: age = (years × 365) + (months × 31) + days.
// Divide the result by years from step 1 and truncate it to get the age in years.
// Multiply the remainder of step 3 by 12 and truncate it to get the months.
// Multiply this last remainder by 31 to get the days.