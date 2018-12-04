import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    login = async () => {

    };

    render() {
        return (
            <div className="main">
                <h2>Login to Shortly</h2>
                <input
                    id="email"
                    type="email"
                    value={this.state.email}
                    placeholder="Email Address"
                    onChange={e => 
                        this.setState({ email: e.target.value })
                    }
                />
                <br />
                <input
                    id="password"
                    type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={e => 
                        this.setState({ password: e.target.value })
                    }
                />
                <br />
                <button
                    className="main_button" 
                    onClick={() => this.login()}
                >Log In</button>
            </div>
        );
    }
}

export default Login;