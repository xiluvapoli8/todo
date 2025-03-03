const tasks =[];

let divEmpty = document.getElementsByClassName('empty');
let divNotEmpty = document.getElementsByClassName('not_empty');

function chooseDisplay(){
    if (tasks.length===0){
        divEmpty.style.display = 'none';
        divNotEmpty.style.display = 'block';
    };
    else{
        divEmpty.style.display = 'block';
        divNotEmpty.style.display = 'none';
    }
}

function adder(){
    let inputText = document.getElementById('add_item').value;
    if (inputText != ""){
        tasks.push(inputText);
        inputField.value = ""; // Clear the input field
        updateTaskList(); // Update the display
    }
    else{
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
addButton.addEventListener('click', adder);
inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adder();
    }
});

// Initialize display
chooseDisplay();

