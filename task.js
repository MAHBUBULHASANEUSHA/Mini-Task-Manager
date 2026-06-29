let addBtn = document.getElementById("addBtn");
let taskNumber = 1;

addBtn.addEventListener("click", addTask);

function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerText = taskNumber + ". " + task;

    document.getElementById("taskList").appendChild(li);

    taskNumber++;

    input.value = "";
}