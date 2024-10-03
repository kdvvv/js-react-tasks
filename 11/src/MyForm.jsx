import React from 'react';

// BEGIN (write your solution here)
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            city: '',
            country: '',
            acceptRules: false,
            isSend: false,
        };
    }

    handleChange = (event) => {
        const {name, type, value, checked} = event.target;
        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({isSend: true});
    };

    handleBack = () => {
        this.setState({isSend: false});
    };

    renderForm() {
        return (
            <form name="myForm" onSubmit={this.handleSubmit}>
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <textarea
                        className="form-control"
                        name="address"
                        id="address"
                        placeholder="1234 Main St"
                        value={this.state.address}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input
                        type="text"
                        className="form-control"
                        name="city"
                        id="city"
                        value={this.state.city}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="country" className="col-form-label">Country</label>
                    <select
                        id="country"
                        name="country"
                        className="form-control"
                        value={this.state.country}
                        onChange={this.handleChange}
                    >
                        <option value="">Choose</option>
                        <option value="argentina">Argentina</option>
                        <option value="russia">Russia</option>
                        <option value="china">China</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rules">
                            <input
                                id="rules"
                                type="checkbox"
                                name="acceptRules"
                                className="form-check-input"
                                checked={this.state.acceptRules}
                                onChange={this.handleChange}
                            />
                            Accept Rules
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }

    renderTable() {
        const formKeys = Object.keys(this.state).filter((key) => key !== "isSend").sort();
        const formData = this.state;

        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.handleBack}>Back</button>
                <table className="table">
                    <tbody>
                    {formKeys.map(key => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{String(formData[key])}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        return (
            <>
                {this.state.isSend ? this.renderTable() : this.renderForm()}
            </>
        );
    }
}

export default MyForm;
// END
