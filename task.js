const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const total = document.getElementById("total");
const completed = document.getElementById("completed");

let totalTask = 0;
let completedTask = 0;

addBtn.addEventListener("click", function () {

    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Current Time
    const now = new Date();
    const addedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    // Create Elements
    let li = document.createElement("li");

    let taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");

    let taskName = document.createElement("span");
    taskName.innerText = task;

    let time = document.createElement("p");
    time.innerText = "🕒 Added: " + addedTime;

    taskInfo.appendChild(taskName);
    taskInfo.appendChild(time);

    // Complete Button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    // Add Elements
    li.appendChild(taskInfo);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Update Total
    totalTask++;
    total.innerText = totalTask;

    taskInput.value = "";

    // Complete Task
    completeBtn.addEventListener("click", function () {

        if (!li.classList.contains("done")) {

            li.classList.add("done");

            completedTask++;
            completed.innerText = completedTask;

        }

    });

    // Delete Task
    deleteBtn.addEventListener("click", function () {

        if (li.classList.contains("done")) {
            completedTask--;
            completed.innerText = completedTask;
        }

        totalTask--;
        total.innerText = totalTask;

        li.remove();

    });

});