import React, { Component } from 'react';
import LinkList from './components/LinkList';
import CreateShortLink from './components/CreateShortLink';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import constants from './constants';
import './App.css';

const LOGGED_IN_USER_QUERY = gql`
  query CurrentUser {
    loggedInUser {
      id
    }
}`;

class Home extends Component {
  logout = () => {
    localStorage.removeItem(constants.shortlyID);
    localStorage.removeItem(constants.shortlyToken);
    this.props.history.push('/');
  }

  render() {
    if (this.props.currentUser && this.props.currentUser.loading) {
      return <div className="main">Loading...</div>
    }

    const userId = this.props.currentUser.loggedInUser && this.props.currentUser.loggedInUser.id;

    // const userName = this.props.currentUser.loggedInUser && this.props.currentUser.loggedInUser.name;

    if (userId) {
      return (
        <div className="main">
          <p className="message-text">Hi <b>{userId}</b></p> 
          <div>
            <h3>All Links</h3>
            <LinkList />
          </div>
          <br />
          <div>
            <h3>Create a Short Link</h3>
            <CreateShortLink />
          </div>
          <br />
          <button
            className="logout-button"
            onClick={() => this.logout()}
          >
            Log out
          </button>
        </div>
      )
    } else {
      return (
        <div className="main">
          <p className="message-text">
            Please <a className="message-link" href="/login">log in</a> or {' '}<a className="message-link" href="/signup">sign up</a>
          </p>
        </div>
      );
    }
  }
}

export default graphql(
  LOGGED_IN_USER_QUERY, { name: 'currentUser' }
)(Home);