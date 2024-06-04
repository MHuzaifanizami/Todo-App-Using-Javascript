
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
        alert("Kindly Write A Task");
    }
}

function deleteTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}

// function edit(button){
   
// }

function edit(button) {
    var li = button.parentNode;
    var taskText = li.firstChild.nodeValue.trim(); // Get the text content of the li element
    var input = document.getElementById("input");
    input.value = taskText; // Set the input field value to the text content
    li.parentNode.removeChild(li); // Remove the li element from the list
}
