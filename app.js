

function btn() {
    var input = document.getElementById("input");
    var list = document.getElementById("list");

    list.innerHTML += `
    <li>${input.value} 
    <button class='li-btn'><i class="fa-solid fa-xmark"></i></button> 
    <button class='li-btn2'><i class="fa-regular fa-pen-to-square"></i></button>
    </li>`;
    input.value = "";
}

