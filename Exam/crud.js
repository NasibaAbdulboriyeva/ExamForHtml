
let employees = [];
let editIndex = null;

const form = document.getElementById('employeeForm');
const nameInput = document.getElementById('name');
const positionInput = document.getElementById('position');
const emailInput = document.getElementById('email');
const tableBody = document.getElementById('employeeTableBody');

// Load from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('employees');
  if (saved) {
    employees = JSON.parse(saved);
    renderTable();
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const employee = {
    name: nameInput.value.trim(),
    position: positionInput.value.trim(),
    email: emailInput.value.trim()
  };

  if (editIndex === null) {
    employees.push(employee);
  } else {
    employees[editIndex] = employee;
    editIndex = null;
  }

  saveToLocalStorage();
  form.reset();
  renderTable();
});

function renderTable() {
  tableBody.innerHTML = '';

  employees.forEach((emp, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${emp.name}</td>
      <td>${emp.position}</td>
      <td>${emp.email}</td>
      <td>
        <button class="btn btn-sm btn-warning me-1" onclick="editEmployee(${index})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteEmployee(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function editEmployee(index) {
  const emp = employees[index];
  nameInput.value = emp.name;
  positionInput.value = emp.position;
  emailInput.value = emp.email;
  editIndex = index;
}

function deleteEmployee(index) {
  if (confirm('Are you sure you want to delete this employee?')) {
    employees.splice(index, 1);
    saveToLocalStorage();
    renderTable();
  }
}

function saveToLocalStorage() {
  localStorage.setItem('employees', JSON.stringify(employees));
}

