import { ADD_TO_TASK, FILTER_TASKS, TOGGLE_TASK } from "../Actions/tasks";

const INITIAL_VALUES = {
    tasks: [
        {
            id: 1,
            description: "Wake up at 8 a.m",
            isDone: "Done",
        },
        {
            id: 2,
            description: "Make my self a breakfast",
            isDone: "Not Done",
        },
    ],
};

export const tasksReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case ADD_TO_TASK:
            return { tasks: [...state.tasks, action.payload] };
        case FILTER_TASKS:
            return { ...state };
        case TOGGLE_TASK:
            const id = state.tasks.findIndex(
                (item) => item.id === action.payload
            );
            const task = state.tasks[id];
            const isDone = task.isDone === "Done" ? "Not Done" : "Done";
            task.isDone = isDone;
            return { tasks: [...state.tasks] };
        default:
            return { ...state };
    }
};
