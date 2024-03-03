
const WorkingDays = prompt('Enter number of working days:\n')
const WorkingHours = prompt('Enter number of working hours per day:\n')
const HourSalary = prompt('Enter your salary per hour:\n')

const salary = (WorkingDays,WorkingHours, HourSalary)=> {
    return Math.round(WorkingDays * WorkingHours * HourSalary) 
}
console.log('Your monthly salary:',salary(WorkingDays,WorkingHours, HourSalary))

const GrossSalary = prompt('Enter your gross salary:\n')
const IncomeTax = prompt('Enter the income tax(in percentage):\n')

const NetSalary = (GrossSalary, IncomeTax)=>{ 
    IncomeTax = 15
    return Math.round(GrossSalary - (GrossSalary * (IncomeTax / 100)));
}
console.log('Your net salary:',NetSalary(GrossSalary, IncomeTax))












