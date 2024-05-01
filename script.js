// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data


const collectEmployees = function() {
  const employees = [];

let isOn = true  
while (isOn) {
    const firstName = prompt ("Enter First Name")
    const lastName = prompt ("Enter Last Name")
    let salary = prompt ("Enter Salary")
    if (!salary){
      break;
      
    }
    salary=Number(salary);

    employees.push({firstName,lastName,salary:[salary]});

  }

  return employees;
};

//How to connect employee object with displayaveragesalary and randomemployee?

// Display the average salary
  // TODO: Calculate and display the average salary
  // Issue: cannot read properties of undefined (forEach)
const displayAverageSalary = function(employees) {

  let total = 0;
  let count = 0;
  employees.forEach((employee => {
    if (employee.salary) {
      employee.salary.forEach((salary) => {
        total += Salary;
        count++;
      });
    }
  }));

  return count > 0 ? total / count : 0;
};

// Select a random employee
//Issue!!! employee and employees unrecognized



const getRandomEmployee = function(employees) {
  // TODO: Select and display a random employee
  //1. Use rng to randomly display one object from object array Employees, logging name
    let randomIndex = Math.floor(Math.random() * employeesArray.length);
    let randomEmployee = employeesArray[randomIndex];
    console.log("Random Employee: " + randomEmployee.firstName +" " +  randomEmployee.LastName);  

   
  };



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

    const salary = document.createElement("td");
    // Format the salary as currency
    salary.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salary);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employee);

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
