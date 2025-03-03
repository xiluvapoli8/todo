const items = []

const inputField = document.querySelector("input");
const addButton = document.getElementById("add_item");
const taskList = document.getElementById("td_list");
const emptyDiv = document.getElementById("empty");
const notEmptyDiv = document.getElementById("not_empty");



// Function to update the display based on array length
const updateListVisibility = () => {
    if (items.length === 0) {
        emptyDiv.style.display = "block";  // Show "Your list is empty"
        notEmptyDiv.style.display = "none"; // Hide task list
    } else {
        emptyDiv.style.display = "none";  // Hide "Your list is empty"
        notEmptyDiv.style.display = "block"; // Show task list

        // Clear existing list before adding new ones
        taskList.innerHTML = "";

        // Loop through the array and add items to the UL
        items.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;

            // Create remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "❌";
            removeButton.onclick = () => removeTask(index);

            // Append elements
            li.appendChild(removeButton);
            taskList.appendChild(li);
        });
    }
};

// Function to add an item to the array
const addTask = () => {
    let taskText = inputField.value.trim(); // Get input value

    // Prevent empty input
    if (!taskText) {
        alert("Please enter a task!");
        return;
    }

    // Add the task to the items array
    items.push(taskText);

    // Clear input field
    inputField.value = "";

    // Update UI
    updateListVisibility();
};

// Function to remove a task from the array
const removeTask = (index) => {
    items.splice(index, 1); // Remove task from array
    updateListVisibility(); // Update display
};

// Add event listener to button
addButton.addEventListener("click", addTask);

// Initialize visibility on page load
updateListVisibility();






















if items.length===0{
  //hide the not empty division and show empty dividion
}
else{
  //hide the not empty division and show empty division
  //the ul should contain items in the items array
}

//add the on click function to add item on input to the array

  
