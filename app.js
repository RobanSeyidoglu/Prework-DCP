let groceries = []; 

let groceryList = document.getElementById('grocery-items');
let submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', (e) => { 
  let input = document.getElementById('input');

  if (input.value.trim() === '') { 
    alert('Please enter a valid input');
  } else {
    groceries.push({
      name: input.value,
      
    });

    input.value = ''; 

    displayGroceries(); 

    
  }
});

function displayGroceries() {
  let index = 0;
  groceryList.innerHTML = groceries.map((grocery, index) => `
    <div class="item">
      <div class="item-name">
        <h3>${grocery.name}</h3>
      </div>
      <div class="item-symbols">
        <button id='edit' onclick='editGroceries(${index})'  class="edit-btn"><i class="fas fa-edit edit"></i></button>
        <button id='delete' onclick='deleteGroceries(${index})' class="delete-btn"><i class="fas fa-trash delete"></i></button>
      </div>
    </div>
  `).join(''); 
  index++;
  
}

function deleteGroceries(index) {
  let isConfirmed = confirm('Are you sure you want to delete'+': '+ groceries[index].name + '?');
  if (isConfirmed) {
    groceries.splice(index, 1);
    displayGroceries();
    
  }
}
function editGroceries(index) {
  let itemName= groceries[index];
let newName = prompt('Enter new name', itemName.name);
 itemName.name = newName;
displayGroceries();

}
