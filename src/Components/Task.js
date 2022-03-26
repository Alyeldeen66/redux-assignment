import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { TOGGLE_TASK } from "../JS/Actions/tasks";

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (id) => dispatch({ type: TOGGLE_TASK, payload: id }),
    };
};

const Task = ({ id, description, isDone, toggle }) => {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    {/* <h5 className="card-title">Task</h5> */}
                    <p className="card-text">{description}</p>
                    <hr />
                    <div>
                        <p>Press To Toggle Value!</p>
                        <Button
                            onClick={() => toggle(id)}
                            className="card-text"
                            style={{ borderRadius: 10 }}
                        >
                            {isDone}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, mapDispatchToProps)(Task);
