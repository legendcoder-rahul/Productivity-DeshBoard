function openFeature() {
  var allElems = document.querySelectorAll(".elem");
  var fullElemPage = document.querySelectorAll(".fullElem");
  var fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "block";
    });
  });

  fullElemPageBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
    });
  });
}

openFeature();

function todoList() {
  var currentTask = [];
  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("no task");
  }

  function renderTasks() {
    let allTask = document.querySelector(".allTask");
    let sum = "";

    currentTask.forEach(function (elem, idx) {
      sum += `<div class="task">
    <h5>${elem.task} <span class="${elem.imp ? "true" : "false"
        }">imp</span></h5>
    <button id=${idx}>Mark as Completed</button>
    </div>`;
    });

    allTask.innerHTML = sum;
    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    document.querySelectorAll(".task button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);
        renderTasks();
        location.reload();
      });
    });
  }

  renderTasks();

  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form input");
  let taskDetailinput = document.querySelector(".addTask form textarea");
  let taskCheckbox = document.querySelector(".addTask form #check");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    currentTask.push({
      task: taskInput.value,
      detail: taskDetailinput.value,
      imp: taskCheckbox.checked,
    });
    renderTasks();

    taskCheckbox.checked = 'false';
    taskInput.value = ''
    taskDetailinput.value = ''
  });
}

todoList();

var hours = Array.from({length: 18}, (_,idx)=>`${6+idx}:00-${7+idx}:00`);

hours.forEach(function(elem){
  console.log(elem);
})