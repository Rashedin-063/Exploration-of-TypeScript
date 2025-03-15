import {useState, useEffect} from 'react';
import Form from './form';
import List from './List';
import { Task } from './types';



function Component() {

  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Task List</h2>
      <Form />
      <List/>
    </div>
  );
}
export default Component;
