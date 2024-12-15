let inp = document.querySelector("#inp")
let btn = document.querySelector("#btn")
let taskArea = document.querySelector(".taskArea")


// Function Which Perform Task Input From Input Box and Verify it cant be Null 

function addTask() {

    let value = inp.value.trim()

    if (value === "") {
        inp.value = ""
        alert("Please Add Task")
    }
    else {
        inp.value = ""

        let li = document.createElement("li")
        li.className = "taskList"

        li.innerHTML += `<h3 class="task">${value}</h3>
        <div class="signs">
                    <img class="sign complete" src="./assest/complete.png" alt="">
                    <img class="sign delete" src="./assest/delete.png" alt="">
                </div>`

        taskArea.appendChild(li)
    }
    saveData()
}

// Function Call on Click on Add Task button


btn.addEventListener("click", addTask)


// This Section Perform Delete and Check Complete Task


taskArea.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        let taskListRemove = e.target.parentElement.closest(".taskList")
        taskListRemove.remove()
        saveData()
    }
    else if (e.target.classList.contains("complete")) {
        let completeTask = e.target.closest(".taskList")
        completeTask.classList.toggle("cmplt")
        saveData()
    }
})

// The Task are store in local Device

function saveData() {
    localStorage.setItem("data", taskArea.innerHTML)
}

// The function use to get Data from Storage and Show

function showTask() {
    const saveData = localStorage.getItem("data")
    if (saveData) taskArea.innerHTML = saveData
}

window.addEventListener("load", showTask)

