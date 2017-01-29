import React from 'react';
import Sidebar from './Sidebar';

export default class Container extends React.Component {
  render() {
    return (
        <div id="container">
          <Sidebar />
        </div>
      );
  }
}
