import React from 'react';

// BEGIN (write your solution here)
class Progress extends React.Component {
    render() {
        const {percentage} = this.props;

        return (
            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-label="progressbar"
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: `${percentage}%`}}
                ></div>
            </div>
        );
    }
}


export default Progress;
// END
