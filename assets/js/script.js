// getting the elements from the page
const cardDiv = document.querySelector(".test");
const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".userInput");

// listening for button clicks
btnEl.addEventListener("click", addTask);

// function to add a new task
function addTask() {
  const task = inputEl.value.trim();

  // checking if the input is empty
  if (task === "") {
    alert("Please enter a task");
    return;
  }

  createTask(task);

  // clearing the input field
  inputEl.value = "";
}

// function to create and display a task
function createTask(task) {
  const divEl = document.createElement("div");
  const ulEl = document.createElement("ul");
  const liEl = document.createElement("li");
  const deleteBtn = document.createElement("button");

  liEl.textContent = task;

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "ms-3");

  // removing the task when delete is clicked
  deleteBtn.addEventListener("click", function () {
    divEl.remove();
  });

  liEl.appendChild(deleteBtn);
  ulEl.appendChild(liEl);
  divEl.appendChild(ulEl);
  cardDiv.appendChild(divEl);
}