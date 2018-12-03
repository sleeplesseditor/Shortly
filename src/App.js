import React, { Component } from 'react';
import LinkList from './components/LinkList';
import CreateShortLink from './components/CreateShortLink';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div>
          <h2>All Links</h2>
          <LinkList />
        </div>
        <div>
          <h2>Create a Short Link</h2>
          <CreateShortLink />
        </div>
      </div>
    );
  }
}

export default App;
