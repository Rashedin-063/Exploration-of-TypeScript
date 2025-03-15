import {useState, useEffect} from 'react';
import Form from './form';
import List from './List';
import { Task } from './types';



function Component() {

  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  }

      console.log(tasks);

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Task List</h2>
      <Form addTask={addTask} />
      <List/>
    </div>
  );
}
export default Component;
