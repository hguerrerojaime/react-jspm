import React from 'react';

export default class MenuItem extends React.Component {

  render() {
    return (
      <li className={ this.props.className }>
          <a href={ this.props.href }>
            { this.props.children }
          </a>
      </li>
    );
  }

}
