import React, { Component } from 'react';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    signup = async () => {

    };

    render() {
        return (
            <div>
                <h2>Join Shortly</h2>
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
                <button onClick={() => this.login()}>Sign Up</button>
            </div>
        );
    }
}

export default Signup;