let selectedRow = null;

let empTable = document.getElementById("eTable");

//I have created the array object here.
let empObj = [];

//here, i am getting the length of array object.
let objLength = empObj.length;

let myData = empTable.innerHTML;

//here we are traversing through the data
for (let i = 0; i < objLength; i++) {
  myData +=
    "<tr>" +
    "<td>" +
    empObj[i].id +
    "</td>" +
    "<td>" +
    empObj[i].Name +
    "</td>" +
    "<td>" +
    empObj[i].EmpCode +
    "</td>" +
    '<td><a class="anchor" onClick="edit()">Edit</a></td>' +
    '<td><a class="anchor" onClick="delete()">Delete</a></td>' +
    "</tr>";
}
empTable.innerHTML = myData;

//here we are adding the data after getting from the form input
function addRecord(id, name, code) {
  let prevValue = empTable.innerHTML;
  let newValue =
    prevValue +
    "<tr>" +
    "<td>" +
    id +
    "</td>" +
    "<td>" +
    name +
    "</td>" +
    "<td>" +
    code +
    "</td>" +
    '<td><a class="anchor" onClick="edit(this)">Edit</a></td>' +
    '<td><a class="anchor" onClick="onDelete(this)">Delete</a></td>' +
    "</tr>";
  empTable.innerHTML = newValue;
}

//here we are updating the data after editing it.
function updateData() {
  selectedRow.cells[0].innerHTML = document.getElementById("empId").value;
  selectedRow.cells[1].innerHTML = document.getElementById("empName").value;
  selectedRow.cells[2].innerHTML = document.getElementById("empCode").value;
  console.log(selectedRow.cells[0].innerHTML);
  resetData();
}

//here we are getting the value from employee table to form input tags.
function edit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("empId").value = selectedRow.cells[0].innerHTML;
  document.getElementById("empName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("empCode").value = selectedRow.cells[2].innerHTML;
}

//here we are deleting the value from the specific row
function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("eTable").deleteRow(row.rowIndex);
  }
}

//function add data to the table
function onSubmit() {
  let empId = document.getElementById("empId").value;
  console.log(empId);
  let empName = document.getElementById("empName").value;
  console.log(empName);
  let empCode = document.getElementById("empCode").value;
  console.log(empCode);
  if (empId === "" || empName === "" || empCode === "") {
    alert("pls enter the value");
  } else if (selectedRow == null) {
    addRecord(empId, empName, empCode);
    console.log(empObj);
    resetData();
  } else {
    updateData();
  }
}

//here we are resetting the form values
function resetData() {
  document.getElementById("empId").value = "";
  document.getElementById("empName").value = "";
  document.getElementById("empCode").value = "";
  selectedRow = null;
}
