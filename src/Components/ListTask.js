import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return { tasks: state.tasks };
};

const ListTask = ({ tasks }) => {
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    useEffect(() => {
        const temp = tasks;
        setFilteredTasks(temp);
    }, [tasks]);
    // const tasksSelector = useSelector((state) => state.tasks);
    const getDoneTasks = () => {
        const temp = tasks.filter(
            (task) => task.isDone.toLowerCase() === "done"
        );
        setFilteredTasks(temp);
    };
    const getUnDoneTasks = () => {
        const temp = tasks.filter(
            (task) => task.isDone.toLowerCase() === "not done"
        );
        setFilteredTasks(temp);
    };
    return (
        <div style={{ marginTop: 10, marginBottom: 10 }}>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={getDoneTasks}>Done</Dropdown.Item>
                    <Dropdown.Item onClick={getUnDoneTasks}>
                        Not Done
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                }}
            >
                {filteredTasks.map((task) => (
                    <Task
                        id={task.id}
                        description={task.description}
                        isDone={task.isDone}
                        tasks={tasks}
                        // setTasks={setTasks}
                    ></Task>
                ))}
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(ListTask);
