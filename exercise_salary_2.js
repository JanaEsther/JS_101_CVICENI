
const WorkingDays = prompt('Enter number of working days:\n')
const WorkingHours = prompt('Enter number of working hours per day:\n')
const HourSalary = prompt('Enter your salary per hour:\n')

const salary = WorkingDays * WorkingHours * HourSalary
console.log(salary)
const tax = Math.floor((salary * 0.6)* 0.15)
console.log(tax)




