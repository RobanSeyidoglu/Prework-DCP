let groceries = JSON.parse(localStorage.getItem('groceries')) || [];

let groceryList = document.getElementById('grocery-items');
let submitBtn = document.querySelector('#submit');
let clearBtn = document.querySelector('.clear-items');

submitBtn.addEventListener('click', (e) => { 
  let input = document.getElementById('input');

  if (input.value.trim() === '') { 
    alert('Please enter a valid input');
  } else {
    groceries.push({
      name: input.value,
    });

    saveAndDisplay(); // Save & update UI
    input.value = ''; 
  }
});

function displayGroceries() {
  groceryList.innerHTML = groceries.map((grocery, index) => `
    <div class="item">
      <div class="item-name">
        <h3>${grocery.name}</h3>
      </div>
      <div class="item-symbols">
        <button onclick='editGroceries(${index})' class="edit-btn">
          <i class="fas fa-edit edit"></i>
        </button>
        <button onclick='deleteGroceries(${index})' class="delete-btn">
          <i class="fas fa-trash delete"></i>
        </button>
      </div>
    </div>
  `).join(''); 
}

// Save groceries to localStorage & update UI
function saveAndDisplay() {
  localStorage.setItem('groceries', JSON.stringify(groceries));
  displayGroceries();
}

// Delete item & save changes
function deleteGroceries(index) {
  let isConfirmed = confirm('Are you sure you want to delete: ' + groceries[index].name + '?');
  if (isConfirmed) {
    groceries.splice(index, 1);
    saveAndDisplay(); // Save changes
  }
}

// Edit item & save changes
function editGroceries(index) {
  let newName = prompt('Enter new name', groceries[index].name);
  if (newName !== null && newName.trim() !== '') {
    groceries[index].name = newName;
    saveAndDisplay(); // Save changes
  }
}

// Delete All Items
clearBtn.addEventListener('click', () => {
  let isConfirmed = confirm('Are you sure you want to clear all items?');
  if (isConfirmed) {
    groceries = [];
    saveAndDisplay(); 
}}
)
// Load items on page load
displayGroceries();
