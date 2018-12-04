import React, { Component } from 'react';
import LinkList from './components/LinkList';
import CreateShortLink from './components/CreateShortLink';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="main">
        <div>
          <h3>All Links</h3>
          <LinkList />
        </div>
        <br />
        <div>
          <h3>Create a Short Link</h3>
          <CreateShortLink />
        </div>
      </div>
    );
  }
}

export default Home;
