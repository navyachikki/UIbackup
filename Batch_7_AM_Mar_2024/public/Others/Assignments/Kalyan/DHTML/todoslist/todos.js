function todo() {
    var todosContainer = document.querySelector(".todosContainer");
    var input = document.querySelector("#taskInput");
    var inputValue = input.value.trim();

    if (!inputValue) {
        alert("Please enter a valid task!");
        return;
    }

    var todoDiv = document.createElement("div");
    todoDiv.setAttribute("class", "tododiv");

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    var label = document.createElement("label");
    label.textContent = inputValue;

    var delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.classList.add("delButton");

    todoDiv.appendChild(checkBox);
    todoDiv.appendChild(label);
    todoDiv.appendChild(delButton);
    todosContainer.appendChild(todoDiv);

    checkBox.addEventListener("change", function() {
        if (this.checked) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    });

    delButton.addEventListener("click", function() {
        todoDiv.remove();
    });

    input.value = "";
}
