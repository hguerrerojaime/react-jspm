import React from 'react';

import { Link } from 'react-router'

export default class MenuItem extends React.Component {

  render() {

    let icon = this.props.icon ? <i className={this.props.icon}></i> : null;

    return (
      <li className={ this.props.className }>
          <Link to={ this.props.href }>
            { icon }
            { this.props.children }
          </Link>
      </li>
    );
  }

}
