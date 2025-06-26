
let cars = [];
let editIndex = null;

const form = document.getElementById('carForm');
const modelInput = document.getElementById('model');
const numberInput = document.getElementById('number');
const colorInput = document.getElementById('color');
const brandInput = document.getElementById('brand');
const priceInput = document.getElementById('price');
const speedInput = document.getElementById('speed');
const createdYearInput = document.getElementById('createdYear');
const tableBody = document.getElementById('carTableBody');


window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('cars');
  if (saved) {
    cars = JSON.parse(saved);
    renderTable();
  }
});

form.addEventListener('submit', function (cr) {
  cr.preventDefault();

  const car = {
    model : modelInput.value.trim(),
    number: numberInput.value.trim(),
    color: colorInput.value.trim(),
    brand: brandInput.value.trim(),
    price: priceInput.value.trim(),
    speed: speedInput.value.trim(),
    createdYear: createdYearInput.value.trim()
  };

  if (editIndex === null) {
    cars.push(car);
  } else {
    cars[editIndex] = car;
    editIndex = null;
  }

  saveToLocalStorage();
  form.reset();
  renderTable();
});

function renderTable() {
  tableBody.innerHTML = '';

  cars.forEach((c, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${c.model}</td>
      <td>${c.number}</td>
      <td>${c.color}</td>
      <td>${c.brand}</td>
      <td>${c.price}</td>
      <td>${c.speed}</td>
      <td>${c.createdYear}</td>
      <td>
        <button class="btn btn-sm btn-warning me-1" onclick="editCar(${index})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteCar(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function editCar(index) {
  const car = cars[index];
  modelInput.value = car.model;
  brandInput.value = car.brand;
  colorInput.value = car.color;
  createdYearInput.value = car.createdYear;
  numberInput.value = car.number;
  priceInput.value = car.price;
  speedInput.value = car.speed;
  editIndex = index;
}

function deleteCar(index) {
  if (confirm('Are you sure you want to delete this car?')) {
    cars.splice(index, 1);
    saveToLocalStorage();
    renderTable();
  }
}

function saveToLocalStorage() {
  localStorage.setItem('cars', JSON.stringify(cars));
}

