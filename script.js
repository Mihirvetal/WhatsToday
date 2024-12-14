// const inputValue = document.querySelector(".input");
// const submitbtn = document.querySelector(".sbbtn");
// const taskarea = document.querySelector(".taskarea");

// // inputValue.addEventListener("change", (e)=>{
// //     const task = e.target.value
// //     taskarea.append(task)
// // })

// submitbtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const task = inputValue.value;

//   const taskname = document.createElement("div");
//   taskname.textContent = task;
//   taskarea.append(taskname)
//   inputValue.value = ""
//   const deleteTask = document.createElement("button")
//   deleteTask.innerText = "Delete"
//   deleteTask.addEventListener("click",(e)=>{
//     taskarea.remove(taskname)
//   })

//   taskarea.append(deleteTask)

// });

// const inputValue = document.querySelector(".input");
// const submitbtn = document.querySelector(".sbbtn");
// const taskarea = document.querySelector(".taskarea");

// submitbtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const task = inputValue.value.trim();

//   if (task) {
//     const taskname = document.createElement("div");
//     taskname.textContent = task;

//     const deleteTask = document.createElement("button");
//     deleteTask.innerText = "Delete";
//     deleteTask.addEventListener("click", () => {
//       taskname.remove();
//     });

//     taskname.append(deleteTask);
//     taskarea.append(taskname);
//     inputValue.value = "";
//     const updateTask = document.createElement("button")
//     updateTask.innerText = "Update"
//     const updatedtask = prompt("Enter task" , taskname.innerText)
//     updateTask.addEventListener("click",(e)=>{
//         taskname.innerText = updatedTask
//     })
//   }

// });

const inputValue = document.querySelector(".input");
const submitbtn = document.querySelector(".sbbtn");
const taskarea = document.querySelector(".taskarea");

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const task = inputValue.value.trim();

  if (task) {
    const taskname = document.createElement("div");
    taskname.textContent = task;

    const deleteTask = document.createElement("button");
    deleteTask.innerText = "Delete";
    deleteTask.addEventListener("click", () => {
      taskname.remove();
    });

    const updateTask = document.createElement("button");
    updateTask.innerText = "Update";
    updateTask.addEventListener("click", () => {
      const updatedTask = prompt("Enter new task", taskname.textContent);
      if (updatedTask) {
        taskname.textContent = updatedTask;
        taskname.append(deleteTask, updateTask); // Re-append buttons after update
      }
    });

    taskname.append(deleteTask, updateTask); // Append both buttons
    taskarea.append(taskname);
    inputValue.value = "";
  }
});

