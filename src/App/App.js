import React, { Component } from 'react';
import './App.scss';

import GroupList from './GroupList'
import MemberList from './MemberList'

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <MemberList />
      </div>
    );
  }
}

export default App;
