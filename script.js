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

    taskname.append(deleteTask);
    taskarea.append(taskname);
    inputValue.value = "";
  }
});
