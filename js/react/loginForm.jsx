var React = require('react');
var jquery = require('jquery');

var LoginForm = React.createClass({
    getInitialState: function() {
        return {
            email: this.props.email,
            password: this.props.password
        };
    },
    handleEmailChange: function(event) {
        this.setState({
            email: event.target.value
        });
    },
    handlePasswordChange: function(event) {
        this.setState({
            password: event.target.value
        });
    },
    handleLogin: function (event) {
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        jquery.ajax({
            path: this.props.action,
            mathod: this.props.method,
            data: {
                email: this.state.email,
                password: this.state.password
            }
        });
    },
    render: function () {
        return (
            <form action="/" method="post" onSubmit={this.handleLogin}>
                <div className="form-group">
                    <input type="text" className="form-control" name="email" onChange={this.handleEmailChange} value={this.state.email} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" onChange={this.handlePasswordChange} value={this.state.password} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-default" value="Login" />
                </div>
            </form>
        );
    }
});

module.exports = LoginForm;
