export class EmployeesList {
    #listElement;
    constructor(idList){
        this.#listElement = document.getElementById(idList);


    }
    showEmployees(employees){
this.#listElement.innerHTML = getEmployeeItems(employees);
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