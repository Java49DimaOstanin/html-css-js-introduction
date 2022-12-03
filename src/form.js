const inputElements = document.querySelectorAll(".form-class [name]");
const error = document.querySelector(".warning");
const oldDate = 1950;
const curDate = new Date().getFullYear;
function onSumbit(event){
    event.preventDefault();
    console.log("sumbitted");
    const employee = Array.from(inputElements).reduce(
        (res,cur) => {
        res[cur.name] = cur.value;
        return res;
    },{})
    console.log(employee);
}
function checkSalary(event) {
    if (event.target.name == "salary"){
        if(+event.target.value < 1000 || +event.target.value  > 40000){
            warning(event);
    }
    
    if(event.target.name == 'birthDate'){
        const arDate = (event.target.value).split('');
        const enterDate = +arDate[0];
        if(enterDate < oldDate || enterDate > curDate ){
            warning(event);
        }
    }
}
}
function warning(event){
    event.target.value= '';
    error.innerHTML = `Wrong value `;
    setTimeout(()=>{
        error.innerHTML = '';  
    },5000);    
}