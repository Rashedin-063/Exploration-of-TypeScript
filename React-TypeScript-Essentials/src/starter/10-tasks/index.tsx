import {useState, useEffect} from 'react';
import Form from './form';
import List from './List';
import { Task } from './types';

// function LoadTasks(): Task[]{
//   const storedTasks = localStorage.getItem('tasks');
//   return storedTasks ? JSON.parse(storedTasks) : []
// }

function loadTasks(): Task[] {
  try {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.error('Error parsing tasks from localStorage:', error);
    return []; // Return empty array to prevent app crash
  }
}

function updateStorage(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function Component() {

  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  }

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {...task, isCompleted:!task.isCompleted };
      }
      return task;
    }))
  }

  useEffect(() => {
    updateStorage(tasks)
  },[tasks])

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Task List</h2>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}
export default Component;
