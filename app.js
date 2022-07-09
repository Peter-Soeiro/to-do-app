const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
const clearBtn = document.querySelector(".clear-tasks");

loadEventListener();

function loadEventListener() {
   form.addEventListener("submit", checkForTask);
   taskList.addEventListener("click", removeTask);
   clearBtn.addEventListener("click", clearTasks);
}

function checkForTask(e) {
   if (taskInput.value === "") {
      alert("Add a task");
   } else {
      const li = document.createElement("li");
      li.className = "collection-item";
      li.appendChild(document.createTextNode(taskInput.value));

      const link = document.createElement("a");
      link.className = "delete-item secondary-content";
      link.innerHTML = '<i class="fa fa-remove"></i>';

      li.appendChild(link);
      taskList.appendChild(li);
      taskInput.value = "";
   }

   e.preventDefault();
}

function removeTask(e) {
   if (e.target.parentElement.classList.contains("delete-item")) {
      // if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
      // }
   }
}

function clearTasks() {
   if (confirm("Are you sure?")) {
      while (taskList.firstChild) {
         taskList.removeChild(taskList.firstChild);
      }

      // const tasks = document.querySelectorAll("li").length;
      // for (var i = 1; tasks >= i; i++) {
      //    document.querySelector("li").remove();
      // }
   }
}
