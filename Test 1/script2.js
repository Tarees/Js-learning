//  Fetch data
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

//to do list

  const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

function addTask() {
  const task = taskInput.value.trim();
  if (task !== "") {
    let li = document.createElement("li");
    li.textContent = task;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";

    delBtn.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = ""; 
  }
}

// Add task when button clicked
addBtn.addEventListener("click", addTask);
 
   

 // backgroud to color
    const button = document.getElementById("changeColor");

    button.addEventListener("click", function() {
      document.body.style.backgroundColor = "blue";
    });

