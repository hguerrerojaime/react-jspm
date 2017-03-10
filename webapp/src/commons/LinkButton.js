import React from 'react';
import Icon from './Icon';
import { Link } from 'react-router'

export default class LinkButton extends React.Component {

  render() {

    let icon = this.props.icon ? <Icon name={this.props.icon} /> : null;

    return this.props.external ? this.renderExternalLink(icon) : this.renderInternalLink(icon);
  }

  renderInternalLink(icon) {
     return (
       <Link to={this.props.href} className={"btn btn-"+this.props.brand+" btn-"+this.props.size}>
         {icon} {" "} { this.props.label }
       </Link>
     );
  }

  renderExternalLink(icon) {
    return (
      <a href={this.props.href}
          className={"btn btn-"+this.props.brand+" btn-"+this.props.size}
      >
         { icon } { this.props.label }
      </a>
    );
  }

}

LinkButton.defaultProps = {
  size: "md",
  label: null,
  href: "#",
  external: false,
  brand: "default"
};
