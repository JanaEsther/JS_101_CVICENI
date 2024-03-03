
WorkingDays = prompt('Enter number of working days:\n')
WorkingHours = prompt('Enter number of working hours:\n')
HourSalary = prompt('Enter your hour salary:\n')

const salary = (WorkingDays,WorkingHours, HourSalary)=> {
    return Math.round(WorkingDays * WorkingHours * HourSalary ) 
}

const NetSalary = (GrossSalary, IncomeTax)=>{ 
    let IncomeTax = 15
    return (GrossSalary/IncomeTax)/100
}