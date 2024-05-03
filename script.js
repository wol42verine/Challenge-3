//Issue: Can't tell if working correctly, average salary and random employee
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

    employees.push({firstName,lastName,salary});

  }

  return employees;
};

//How to connect employee object with displayaveragesalary and randomemployee?

// Display the average salary
 
const displayAverageSalary = function(employees) {

  let total = 0;
  let numOfEmployees = employees.length;

  for (const employee of employees) {
    total += employee.salary;

  }
  const averageSalary = total / numOfEmployees;

  console.log (`${averageSalary.toFixed(2)}`);
//console.log (total);

  /*employees.forEach((employee => {s
    if (employee.salary) {
      employee.salary.forEach((salary) => {
        total += salary;
        count++;
      });
    }
  }));
  return count = total / count;*/

    //console.log (employees.salary)
  
};
//console.log (displayAverageSalary);
// Select a random employee




const getRandomEmployee = function(employees) {
  // TODO: Select and display a random employee
  
    let randomIndex = Math.floor(Math.random() * employees.length);
    let randomEmployee = employees[randomIndex];
    console.log("Random Employee", randomEmployee.firstName +" " +  randomEmployee.lastName);  
    //console.log (randomEmployee.firstName);   
  };



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employees) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employees.length; i++) {
    const currentEmployee = employees[i];

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
