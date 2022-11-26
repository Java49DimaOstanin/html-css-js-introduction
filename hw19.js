function createEmployee(id,name,birthYear,salary) {
    return {id, name,birthYear,salary}

}
function createRandomEmployee (nEmployee ,idDigits ,  minBirthYear,maxBirthYear ,minSalary, maxSalary){
    let employees = [];
    for(let i = 0;i <nEmployee;i++) {
   employees.push(createEmployee(
    id = createIDrandom(idDigits),
    createName(id),
    crateBirthYear(minBirthYear,maxBirthYear),
    createSalary(minSalary,maxSalary),
    ))
   }
return employees;
}
function createIDrandom(idDigits){
    minDigit = Math.pow(10,idDigits-1);
    maxDigit = Math.pow(10,idDigits);
    return digit = getRandomNumber(minDigit,maxDigit);
    
}
function createName(id){
    return id + 'name';
}
function crateBirthYear(minBirthYear,maxBirthYear) {
    return  getRandomNumber(minBirthYear,maxBirthYear);

}
function createSalary(minSalary,maxSalary){
    return  getRandomNumber(minSalary,maxSalary);
}
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max+1 - min) + min);
} 



const employees = createRandomEmployee (5 ,3, 1950,2010,16500,25900);
console.log ('1# List of employees',employees);
// ============================== 2 ================================
function getAverageAge(employees) {

   return employees.reduce((res,cur) => { 
    return res +new Date().getFullYear() - cur.birthYear;},0)/employees.length;
         
}
console.log (`2# Average age`,getAverageAge(employees));

//===============================  3  ==============================

function getEmployeesBySalary (employees,salaryFrom,salaryTo){
   return employees.sort((a,b) => a.salary - b.salary).filter(element => element.salary >= salaryFrom && element.salary <= salaryTo);
}

console.log('3# By salary range' ,getEmployeesBySalary(employees,18000,23000));

//===============================  4 ===========================
function inscreaseSalary(employees,borderSalary,bonus){
    return employees.filter(element => element.salary < borderSalary).map(element => element.salary += element.salary/100*bonus );
}

console.log('new salary for employee',inscreaseSalary(employees,20000,10))

//================================ 4.1 ============================
function inscreaseSalary1(employees,borderSalary,bonus){
    let arrEmployees = employees.filter(element => element.salary < borderSalary)
    arrEmployees.forEach(element => element.salary += element.salary/100*bonus );
    return arrEmployees;
}
console.log('new salary for employee 4.1',inscreaseSalary1(employees,22000,10))
