import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
const TodoBox = () => {
    const [tasks, setTasks] = React.useState([]);
    const [newTaskText, setNewTaskText] = React.useState('');

    React.useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get(routes.tasksPath());
            setTasks(response.data);
        };
        fetchTasks();
    }, []);

    const addTask = async (e) => {
        e.preventDefault();
        if (newTaskText.trim() === '') return;

        const response = await axios.post(routes.tasksPath(), {text: newTaskText});
        setTasks([...tasks, response.data]);
        setNewTaskText('');
    };

    const toggleTaskState = async (id) => {
        const task = tasks.find((task) => task.id === id);

        const route = task.state === 'active'
            ? routes.finishTaskPath(id)
            : routes.activateTaskPath(id);

        const response = await axios.patch(route);
        const taskIndex = tasks.findIndex((t) => t.id === id);

        const updatedTasks = update(tasks, {
            [taskIndex]: {$set: response.data}
        });
        setTasks(updatedTasks);
    };

    const renderTasks = (tasks, filter) => {
        return tasks
            .filter((task) => task.state === filter)
            .map((task) => (
                <Item key={task.id} task={task} onClick={toggleTaskState}/>
            ));
    };

    const tasksLength = (tasks, filter) => {
        return tasks
            .filter((task) => task.state === filter)
            .length;
    }

    return (
        <div>
            <div className="mb-3">
                <form className="todo-form mx-3" onSubmit={addTask}>
                    <div className="d-flex col-md-3">
                        <input
                            type="text"
                            value={newTaskText}
                            onChange={(e) => setNewTaskText(e.target.value)}
                            required
                            className="form-control me-3"
                            placeholder="I am going..."
                        />
                        <button type="submit" className="btn btn-primary">add</button>
                    </div>
                </form>
            </div>

            {tasksLength(tasks, 'active') !== 0 ? <div className="todo-active-tasks">
                {renderTasks(tasks, 'active')}
            </div> : null}

            {tasksLength(tasks, 'finished') !== 0 ? <div className="todo-finished-tasks">
                {renderTasks(tasks, 'finished')}
            </div> : null}
        </div>
    );
};

export default TodoBox;
// END
