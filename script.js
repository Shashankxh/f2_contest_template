let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// Function to print developers using the map function
function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// Function to print developers using the forEach function
function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// Function to add a new employee to the array
function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr); // Print the updated array with the new employee
}

// Function to remove the employee whose profession is admin
function removeAdmin() {
  const updatedArray = arr.filter((employee) => employee.profession !== "admin");
  console.log(updatedArray); // Print the array after removing the admin
}

// Function to concatenate a new array with the existing array
function concatenateArray() {
  const newArr = [
    { id: 5, name: "peter", age: "22", profession: "designer" },
    { id: 6, name: "anna", age: "21", profession: "developer" },
    { id: 7, name: "mike", age: "23", profession: "manager" },
  ];

  const concatenatedArray = arr.concat(newArr);
  console.log(concatenatedArray); // Print the concatenated array
}
