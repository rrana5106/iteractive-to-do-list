// getting the elements from the page
const taskList = document.querySelector(".task-list");
const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".userInput");

// listening for button clicks
btnEl.addEventListener("click", addTask);

// function to add a new task
function addTask() {
  // getting the value from the input field
  const task = inputEl.value.trim();

  // checking if the input is empty
  if (task === "") {
    alert("Please enter a task");
    return;
  }

  // creating and displaying the task
  createTask(task);

  // clearing the input field after adding a task
  inputEl.value = "";
}

// function to create and display a task
function createTask(task) {
  // creating new elements
  const liEl = document.createElement("li");
  const deleteBtn = document.createElement("button");

  // adding task text
  liEl.textContent = task;

  // adding bootstrap classes to the list item

  liEl.classList.add(
    "task-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "mb-2",
    "border",
    "p-2",
    "rounded",
  );

  // setting up the delete button
  //   deleteBtn.textContent = "Delete";
  // deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
  deleteBtn.innerHTML = `
  <span class="delete-text">Delete</span>
  <i class="bi bi-trash delete-icon"></i>
`;
  deleteBtn.classList.add("btn", "btn-danger", "btn-sm");

  // removing the task when delete button is clicked
  deleteBtn.addEventListener("click", function () {
    liEl.remove();
  });

  // adding the delete button to the task
  liEl.appendChild(deleteBtn);

  // displaying the task on the page
  taskList.appendChild(liEl);
}
