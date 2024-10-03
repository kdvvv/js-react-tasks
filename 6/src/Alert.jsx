import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
class Alert extends React.Component {
    render() {
        const { text, type } = this.props;

        let alertClass = cn('alert', `alert-${type}`);

        return (
            <div className={alertClass} role="alert">
                {text}
            </div>
        );
    }
}

Alert.defaultProps = {
    text: "",
    type: 'primary',
};

export default Alert;
// END
