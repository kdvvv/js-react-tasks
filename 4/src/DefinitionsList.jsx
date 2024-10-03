import React from 'react';

// BEGIN (write your solution here)
class DefinitionsList extends React.Component {
    render() {
        const { data } = this.props;

        if (!data || data.length === 0) {
            return null;
        }

        return (
            <dl>
                {data.map(({ dt, dd, id }) => (
                    <React.Fragment key={id}>
                        <dt>{dt}</dt>
                        <dd>{dd}</dd>
                    </React.Fragment>
                ))}
            </dl>
        );
    }
}

export default DefinitionsList;
// END
