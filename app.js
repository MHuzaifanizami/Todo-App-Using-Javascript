
function btn() {
    var input = document.getElementById("input");
    var list = document.getElementById("list");
    if (input.value) {
        list.innerHTML += `
    <li>${input.value} 
    <button class='li-btn' onclick='deleteTask(this)'><i class="fa-solid fa-xmark"></i></button> 
    <button class='li-btn2' onclick ='edit(this)'><i class="fa-regular fa-pen-to-square"></i></button>
    </li>`;
        input.value = "";
    } else {
        alert("Task cannot be empty");
    }
}

function deleteTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}

function deleteAll(){
    list = list.remove() 
}

function edit(button) {
    var li = button.parentNode;
    
    // Get the current task text
    var currentText = li.firstChild.textContent.trim();
    
    // Create an input field with the current task text
    var input = document.createElement("input");
    input.type = "text";
    input.classList.add("edit-input")
    input.value = currentText;

    // Create a save button
    var saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.className = 'save-btn';

    // Define the save button onclick function
    saveButton.onclick = function() {
        var newText = input.value;
        if (newText) {
            li.innerHTML = `${newText} 
            <button class='li-btn' onclick='deleteTask(this)'><i class="fa-solid fa-xmark"></i></button> 
            <button class='li-btn2' onclick ='edit(this)'><i class="fa-regular fa-pen-to-square"></i></button>`;
        } else {
            alert("Task cannot be empty");
        }
    };

    // Clear the current contents of the li and add the input field and save button
    li.innerHTML = "";
    li.appendChild(input);
    li.appendChild(saveButton);
}

