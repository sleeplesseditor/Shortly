import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import constants from '../constants';

const AUTHENTICATE_USER_MUTATION = gql`
  mutation AuthUser(
        $email: String!, 
        $password: String!
    ) {
        authenticateUser(email: $email, password: $password
    ) {
        id
        token
    }
  }`;

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    login = async () => {
        const { email, password } = this.state;
        try {
            const result = await this.props.authenticateUserMutation({
                variables: {
                    email,
                    password
                },
            });

            localStorage.setItem(constants.shortlyID, result.data.authenticateUser.id);
            localStorage.setItem(
                constants.shortlyToken, 
                result.data.authenticateUser.token,
            );
            this.props.history.push('/');
        } catch (error) {
            this.setState({
                error: `Sorry, an error occurred on signing up. (${error})`
            })
        }
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

export default graphql(AUTHENTICATE_USER_MUTATION, {
    name: 'authenticateUserMutation',
})(Login);