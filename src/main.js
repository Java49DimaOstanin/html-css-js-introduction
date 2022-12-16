import { Company } from "./data/company.js";
import { EmployeeForm } from "./ui/employeeForm.js";
import { EmployeesList } from "./ui/EmployeeList.js";

import { SalariesForm } from "./ui/SalariesForm.js";

const MIN_SALARY = 50;
const MAX_SALARY = 2000;
const MIN_YEAR = new Date ('1980-01-01')
const ACTIVE = "active"

const listAllEmployees = new EmployeesList("employees-all");
const listEmployeesBySalary = new EmployeesList("employees-salary")
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
const bookListelement = document.getElementById("books-by-author")
const authorInputElements = document.querySelectorAll(".author-form-class  [name]")
/************************************************************************** */



const company = new Company();

const paramSalaries = { idForm: "salary-form" ,idSalaryInput: "salaryFrom",
idSalaryToInput: "salaryTo" ,idErrorMessage: "salary_form_error" }
const salariesForm = new SalariesForm(paramSalaries);
salariesForm.addSubmitHandler((salariesObj) => {
    const employee = company.getEmployeesBySalary(salariesObj.salaryFrom, 
        salariesObj.salaryTo);
    listEmployeesBySalary.showEmployees(employee);
})



const employeeForm = new EmployeeForm({idForm: "employee_form", idDateInput: "date_input",
       idSalaryInput: "salary_input", idDateError: "date_error", idSalaryError: "salary_error",
       minYear: MIN_YEAR, minSalary: MIN_SALARY, maxSalary: MAX_SALARY})
 employeeForm.addSubmitHandler((employee) => company.hireEmployee(employee))
/************************************************************* */
function onSubmitAuthor(event) {
    event.preventDefault();
    const author = Array.from(authorInputElements)[0].value;
    const books = company.getBooksByAuthor(author);
    bookListelement.innerHTML = getEmployeeItems(books); 
}
/********************************************************************************** */


function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const employees = company.getAllEmployees();
        listAllEmployees.showEmployees(employees);
    }
}



window.showSection = showSection;

window.onSubmitAuthor = onSubmitAuthor