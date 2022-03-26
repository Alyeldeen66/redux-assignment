import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Task = ({id,description,isDone,tasks,setTasks}) =>{
    const [status,setStatus] = useState(isDone);
    
    const toggleValue =()=>{
        const temp = tasks[id-1];
        if(status =='Done'){
        setStatus('Not Done');
        tasks[id-1].isDone = 'Not Done';
        console.log(temp)
        console.log(tasks)
        }
        else{
        setStatus('Done');
        tasks[id-1].isDone = 'Done';
        console.log(temp)
        console.log(tasks)
        }
    }
    
    return(
        <div>
            <div className="card" style={{width:'18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Task</h5>
                    <p className="card-text">{description}</p>
                    <hr/>
                    <div>
                    <p>Press To Toggle Value!</p>
                    <Button onClick={toggleValue} className="card-text" style={{borderRadius:10}}>{status}</Button>
                    </div>
                 </div>
            </div>

        </div>
    );
};

export default Task;