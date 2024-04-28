// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  //1. Create Object Array, with necessary components below
  //2. Form input, to add firstNameCell, lastNameCell, and salaryCell
  //3. Objects will be called employees
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // 1. Math function, taking in all salaryCell numbers, find average, and display
  let total = 0;
  let count = 0;
  employeesArray.forEach(employee => {
    employee.salaryCell.forEach(salary =>{
      total += salary;
      count++;
    });
  });

  return count > 0 ? total / count : 0;
}

// Select a random employee
let randomIndex = Math.floor(Math.random() * employees.length);

let randomEmployee = employees[randomIndex];

console.log("Random Employee: " + randomEmployee.firstName +" " +  randomEmployee.LastName);

const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //1. Use rng to randomly display one object from object array Employees, logging name
    let randomIndex = Math.floor(Math.random() * employees.length);
    let randomEmployee = employees[randomIndex];
    console.log("Random Employee: " + randomEmployee.firstNameCell +" " +  randomEmployee.LastNameCell);  
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
