// const taskForm = document.querySelector<HTMLFormElement>('form');

// const formInput = document.querySelector<HTMLInputElement>('.form-input');

// const taskListElement = document.querySelector<HTMLUListElement>('.list');

// // console.log(taskForm, formInput, taskListElement);

// type Task = {
//   description: string;
//   isCompleted: boolean;
// };

// const tasks: Task[] = [];

// taskForm?.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const taskDescription = formInput?.value;
//   if (taskDescription) {
//     const task: Task = {
//       description: taskDescription,
//       isCompleted: false,
//     };

//     // add task to list
//     addTask(task);

//     // render tasks
//     renderTask(task);

//     // update local storage

//     formInput.value = '';
//     return;
//   }
//   alert('Please enter a task description');
// });

// function addTask(task: Task): void {
//   tasks.push(task);
//   console.log(task);
// }

// function renderTask(task: Task): void {
//   const taskElement = document.createElement('li');
//   taskElement.textContent = `${task.description} - ${
//     task.isCompleted ? 'Completed' : 'Not Completed'
//   }`;

//   taskListElement?.appendChild(taskElement);
// }
