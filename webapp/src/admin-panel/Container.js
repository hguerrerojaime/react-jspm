import React from 'react';
import Sidebar from './Sidebar';
import Content from './content/Content';

export default class Container extends React.Component {
  render() {
    return (
        <div id="container" className="fixed-header">
          <Sidebar />
          <Content />
        </div>
      );
  }
}
