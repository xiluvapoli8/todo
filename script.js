const tasks = [];
const divEmpty = document.getElementById('empty');
const divNotEmpty = document.getElementById('not_empty');
const inputField = document.querySelector('input[type="text"]');
const todoList = document.getElementById('td_list');

function chooseDisplay() {
    if (tasks.length === 0) {
        divEmpty.style.display = 'block';
        divNotEmpty.style.display = 'none';
    }
    else{
        divEmpty.style.display = 'none';
        divNotEmpty.style.display = 'block';
    }
}

function adder() {
    let inputText = inputField.value.trim();
    if (inputText !== "") {
        tasks.push(inputText);
        inputField.value = ""; // Clear the input field
        updateTaskList(); // Update the display
    } else {
        alert("Item cannot be empty!");
    } 
}

function updateTaskList() {
    // Clear the current list
    todoList.innerHTML = '';
    
    // Add each task as a list item
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        todoList.appendChild(li);
    });
    
    // Update display based on tasks array length
    chooseDisplay();
}

inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adder();
    }
});

// Initialize display
chooseDisplay();
