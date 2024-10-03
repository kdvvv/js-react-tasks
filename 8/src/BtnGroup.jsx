import cn from 'classnames';
import React, { Component } from 'react';
// BEGIN (write your solution here)
class BtnGroup extends Component {
    constructor(props) {
        super(props);
        this.state = { activeBtn: null };
    }

    handleLeftClick = () => {
        this.setState({ activeBtn: 'left' });
    };

    handleRightClick = () => {
        this.setState({ activeBtn: 'right' });
    };

    render() {
        return (
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className={`btn btn-secondary left${this.state.activeBtn === 'left' ? ' active' : ''}`}
                    onClick={this.handleLeftClick}
                >
                    Left
                </button>
                <button
                    type="button"
                    className={`btn btn-secondary right${this.state.activeBtn === 'right' ? ' active' : ''}`}
                    onClick={this.handleRightClick}
                >
                    Right
                </button>
            </div>
        );
    }
}

export default BtnGroup;

// END
