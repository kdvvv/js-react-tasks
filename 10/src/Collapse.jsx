import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.opened,
        };

        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    toggleCollapse() {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    };

    handleClick(e) {
        e.preventDefault();
        this.toggleCollapse();
    };

    render() {
        const { text } = this.props;
        const { isOpen } = this.state;

        return (
            <div>
                <p>
                    <a
                        className="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#"
                        role="button"
                        aria-expanded={isOpen}
                        onClick={this.handleClick}
                    >
                        Link with href
                    </a>
                </p>
                <div className={`collapse${isOpen ? ' show' : ''}`}>
                    <div className="card card-body">{text}</div>
                </div>
            </div>
        );
    }
}

Collapse.defaultProps = {
    opened: true,
}

export default Collapse;
// END
