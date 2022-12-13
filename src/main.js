import { Company } from "./data/company.js";
import { EmployeeForm } from "./ui/employeeForm.js";
import { showErrorMessage } from "./ui/errorMessage.js";

const MIN_SALARY = 50;
const MAX_SALARY = 2000;
const MIN_YEAR = new Date ('1980-01-01')


const ACTIVE = "active"




const salaryFormErrorElement = document.getElementById("salary_form_error");
const employeesListElement = document.getElementById("employees-all");
const employeesSalaryListElement = document.getElementById("employees-salary");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
const bookListelement = document.getElementById("books-by-author")
const authorInputElements = document.querySelectorAll(".author-form-class  [name]")
/************************************************************************** */
//functions of Company


const company = new Company();
//functions of Employee Form




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

//functions of Salary Form

let salaryFrom = 0;
let salaryTo = 0;
function onSubmitSalary(event) {
    event.preventDefault();
    const employees = company.getEmployeesBySalary(salaryFrom, salaryTo);
    employeesSalaryListElement.innerHTML = getEmployeeItems(employees); 
}
function onChangeSalaryFrom(event) {
    const value = +event.target.value;
    if (salaryTo && value >= salaryTo) {
        showErrorMessage(event.target, "Salary 'from' must be less than Salary 'to'",
        salaryFormErrorElement);
    } else {
        salaryFrom = value;
    }
}
function onChangeSalaryTo(event) {
    const value = +event.target.value;
    if (salaryFrom && value < salaryFrom) {
        showErrorMessage(event.target, "Salary 'To' must be greater than Salary 'From'",
        salaryFormErrorElement);
    }
    salaryTo = value;
}
function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const employees = company.getAllEmployees();
        employeesListElement.innerHTML = getEmployeeItems(employees);
    }
}
function getEmployeeItems(employees) {
    return employees.map (e => 
        `<li class="employees-item">
              <div class="employees-item-container">
                 <p class="employees-item-paragraph">Author name: ${e.employee_name} </p>
                 <p class="employees-item-paragraph">Book name: ${e.email} </p>
                 <p class="employees-item-paragraph">Genre: ${e.department}</p>
                 <p class="employees-item-paragraph">Publish date: ${e.birthDate}</p>
                 <p class="employees-item-paragraph">Pages: ${e.salary}</p>
              </div>
          </li>`).join('');
}


window.showSection = showSection;
window.onChangeSalaryTo = onChangeSalaryTo;
window.onChangeSalaryFrom = onChangeSalaryFrom
window.onSubmitSalary = onSubmitSalary
window.onSubmitAuthor = onSubmitAuthor