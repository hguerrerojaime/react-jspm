import React from 'react';
import Icon from './Icon';

export default class LinkButton extends React.Component {

  render() {

    let icon = this.props.icon ? <Icon name={this.props.icon} /> : null;

    return (
      <a href="#"
          className={"btn btn-"+this.props.brand+" btn-"+this.props.size}
          onClick={this.props.onClick}
      >
         { icon } { this.props.label }
      </a>
    );
  }

}

LinkButton.defaultProps = {
  size: "md",
  label: null,
  brand: "default",
  onClick: (evt) => {}
};
