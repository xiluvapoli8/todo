function iDisplay(){
  const todoList = document.getElementById('td_list');
  const emptyMessage = document.getElementById('empty');
  const notEmptyMessage = document.getElementById('not_empty');

  if (todoList.children.length === 0) {
    emptyMessage.style.display = 'block';
    notEmptyMessage.style.display = 'none';
  } else {
    emptyMessage.style.display = 'none';
    notEmptyMessage.style.display = 'block';
  
};


function addItemAndUpdateDisplay() {
  const todoList = document.getElementById('td_list');
  const emptyMessage = document.getElementById('empty');
  const notEmptyMessage = document.getElementById('not_empty');
  const input = document.getElementById('newTask');

  // Add the input value as the text content of the new item
  if (input.value.trim()) {
    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    todoList.appendChild(newItem);

    // Clear the input field
    input.value = '';

    // Update the display after adding a new item
    if (todoList.children.length > 0) {
      emptyMessage.style.display = 'none';
      notEmptyMessage.style.display = 'block';
    }
  }
}

// Run the initial display update on page load
iDisplay();

// Add event listener to the button
document.getElementById('add_item').addEventListener('click', addItemAndUpdateDisplay);
