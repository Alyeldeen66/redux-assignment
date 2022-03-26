import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Button,Form } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux';
import {addToTasks} from '.././JS/Reducers/reducer';
import store from '.././JS/Store/store';

const AddTask = ({tasks,setTasks}) =>{
            const [show,setShow] = useState(false);
            const dispatch = useDispatch();
            
            const tasksSelector = useSelector((state)=> state.tasks)

            const [addTask,setAddTask] =useState({
                id : '',
                description : '',
                isDone : ''
            });
            const [giveId,setGiveId] = useState(3);
            
            const handleModal = ()=>{
                setShow(!show);
            }
            const handleDesValue = (e) =>{
                e.preventDefault();
                addTask['description'] = e.target.value;
            }
            const handleIsDoneValue = (e) =>{
                e.preventDefault();
                addTask['isDone'] = e.target.value;
            }
            const addToDo =()=>{
                const temp = {
                    id: giveId ,
                    description : addTask.description,
                    isDone : addTask.isDone
                };

                dispatch(addToTasks(temp));
                console.log(tasksSelector)
                handleModal();
            }

            const addNewValue = (e) =>{
                e.preventDefault();
                const temp = {
                    id: giveId ,
                    description : addTask.description,
                    isDone : addTask.isDone
                };
                setTasks([...tasks,temp]);  
                handleModal();
                console.log(tasksSelector);
                setGiveId(prevgiveId => prevgiveId + 1);
            }
    return(
        <div>
            <Button onClick={handleModal}>Add a Task!</Button>
            <Modal show={show}>
                <Modal.Header>Add A Movie !</Modal.Header>
                <Modal.Body>
                <Form onSubmit={addNewValue}>
                           <Form.Group>    
                            <input onChange={handleDesValue} className="form-control mt-3" name="description" type="text"  placeholder='Enter task description' required="required"></input>
                            <input onChange={handleIsDoneValue} className="form-control mt-3"  type="text"  placeholder='Type The condition' required="required"></input>
                            </Form.Group>
                            <Button type="submit" className="btn btn-primary" style={{float:"right",marginTop:5}}>Submit</Button>
                            <Modal.Footer>
                        <Button style={{float:'right'}} onClick={handleModal}>
                            Close
                        </Button>
                        <Button onClick={addToDo}>Press me</Button>
                    </Modal.Footer>  
                        </Form>
                </Modal.Body>
            </Modal>
            
        </div>
    );

};

export default AddTask;