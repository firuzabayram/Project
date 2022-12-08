let todoInput = document.querySelector("#todo-input");
let addButton = document.querySelector("#add-button");
let todoList = document.querySelector("#todo-list");

let editElement;

addButton.setAttribute("disabled", true);

todoInput.addEventListener("keyup", function (e) {
  if (e.target.value) {
    addButton.removeAttribute("disabled");
  } else {
    addButton.setAttribute("disabled", "");
  }
});

addButton.addEventListener("click", function (e) {
  e.preventDefault();

  //CREATING TODO
  let liElement = document.createElement("li");
  let headingElement = document.createElement("h2");
  let spanElement = document.createElement("span");
  let clearButton = document.createElement("button");
  let editButton = document.createElement("button");
  let icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-house");

  editButton.style.cssText = `
            padding: 8px 12px;
            border-radius: 8px;
            margin-right: 10px;
            transition: 0.5s;
            cursor: pointer;
            `;
  clearButton.innerText = "X";
  editButton.innerText = "Edit";
  clearButton.classList.add("delete-button");

  liElement.appendChild(headingElement);

  spanElement.appendChild(editButton);
  spanElement.appendChild(clearButton);
  liElement.appendChild(spanElement);

  liElement.children[0].innerText = todoInput.value;
  todoList.prepend(liElement);

  //DELETE SPECIFIC TODO
  clearButton.addEventListener("click", function () {
    this.closest("li").remove();
  });

  //EDIT SPECIFIC TODO
  editButton.addEventListener("click", function () {
    todoInput.value = this.closest("li").children[0].innerText;
    editElement = this.closest("li");
    todoInput.focus();
    addButton.innerText = "Edit";
    console.log(this.parentNode.closest("div"));
    console.log(this.parentElement.closest("div"));
    addButton.removeAttribute("disabled");
  });

  addButton.innerText = "Add";
  addButton.setAttribute("disabled", "");
  todoInput.value = "";
  editElement?.remove();
});

// todoInput === document.activeElement && addButton.setAttribute('disabled');

window.addEventListener("keyup", createTodo);
