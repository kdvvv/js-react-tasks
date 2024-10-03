import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
class LogComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: []
        };
    }

    getLast() {
        return get(this.state.values, 0, 0)
    }

    handleIncrement = () => {
        const newValue = this.getLast() + 1;
        this.setState((prevState) => ({
            values: [newValue, ...prevState.values],
        }));
    };

    handleDecrement = () => {
        const newValue = this.getLast() - 1;
        this.setState((prevState) => ({
            values: [newValue, ...prevState.values]
        }));
    };

    handleLogClick = (index) => {
        this.setState((prevState) => ({
            values: [...prevState.values.slice(0, index), ...prevState.values.slice(index + 1)]
        }));
    };

    render() {
        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={this.handleIncrement}>
                        +
                    </button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.handleDecrement}>
                        -
                    </button>
                </div>
                {this.state.values.length !== 0 ? <div className="list-group">
                    {this.state.values.map((value, index) => (
                        <button
                            key={index}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => this.handleLogClick(index)}
                        >
                            {value}
                        </button>
                    ))}
                </div> : null}
            </div>
        );
    }
}

export default LogComponent;
// END
