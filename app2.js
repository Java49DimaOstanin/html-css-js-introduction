// function createEmployee(id, name, birthYear, salary) {
//     return {id, name, birthYear, salary};
// }
// const empl1 = createEmployee(123, "Vasya", 2000, 5000);
// const empl2 = empl1;
// console.log(empl1==empl2);
// function updateSalary(empl1, newSalary) {
//     empl1.salary = newSalary;
//     // empl1 = createEmployee(123, "Vasya", 2000, newSalary)
// }
// updateSalary(empl1, 15000);
// console.log(empl1);
// function updateSalaryPrimitive(salary, newSalary) {
//     salary = newSalary;
// }
// let salary = 10000;
// updateSalaryPrimitive(salary, 20000);
// console.log(empl1);
// console.log("salary", salary);


function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max+1 - min) + min);
}
console.log(getRandomNumber(1950,2010));