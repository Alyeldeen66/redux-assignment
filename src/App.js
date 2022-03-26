import { useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
function App() {
      const [tasks,setTasks] = useState([
        {
          id : 1,
          description : "Wake up at 8 a.m",
          isDone : 'Done'
        },
        {
          id : 2,
          description : "Make my self a breakfast",
          isDone : 'Not Done'
        },
      ])

  return (
    <div className="App">
      
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <ListTask tasks={tasks} setTasks={setTasks} />
      
    </div>
  );
}

export default App;
