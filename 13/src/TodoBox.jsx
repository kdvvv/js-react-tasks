import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleChange(event) {
        this.setState({ newTask: event.target.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        const { newTask, tasks } = this.state;
        if (newTask) {
            this.setState({
                tasks: [...tasks, { id: uniqueId(), task: newTask }],
                newTask: '',
            });
        }
    };

    handleRemove(id) {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter(task => task.id !== id),
        }));
    };

    render() {
        const { tasks, newTask } = this.state;

        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                        <div className="me-3">
                            <input
                                type="text"
                                value={newTask}
                                onChange={this.handleChange}
                                required
                                className="form-control"
                                placeholder="I am going..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                <div>
                    {tasks.map((task) => (
                        <Item
                            key={task.id}
                            task={task.task}
                            onRemove={() => this.handleRemove(task.id)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default TodoBox;
// END
