const taskForm = document.querySelector<HTMLFormElement>('form');




const formInput = document.querySelector<HTMLInputElement>('.form-input');


const taskListElement = document.querySelector<HTMLUListElement>('.list')

// console.log(taskForm, formInput, taskListElement);

type Task = {
  description: string;
  isCompleted: boolean;
}

const tasks: Task[] = loadTasks()

tasks.forEach(renderTask)

function loadTasks(): Task[] { 
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    return JSON.parse(storedTasks) as Task[];
  }
  return [];
}


taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {

    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    }

    

    // add task to list
addTask(task);

    // render tasks
renderTask(task)

    // update local storage


updateStorage()

    formInput.value = '';
    return;
  }
  alert('Please enter a task description');
});

function addTask(task: Task): void {
  tasks.push(task)
  console.log(task)
  
}

function renderTask(task: Task): void{
  const taskElement = document.createElement('li');
  taskElement.textContent = `${task.description} - ${
    task.isCompleted ? 'Completed' : 'Not Completed'
  }`;

  // checkbox
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.checked = task.isCompleted;

  // toggle checkbox
  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);

  taskListElement?.appendChild(taskElement);
}


function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}