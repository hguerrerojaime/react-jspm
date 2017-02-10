import React from 'react';

import $ from 'jquery';
import Button from 'react-jspm/commons/Button';
import Icon from './Icon';

export class ModalFooter extends React.Component {
  render() {
    return (
      <div className="modal-footer">
        {this.props.children}
      </div>
    );
  }
}

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    let icon = this.props.icon ? <Icon name={this.props.icon} /> : null;

    return (
      <div className="modal" tabIndex="-1" role="dialog" ref={(element) => this.element = element }>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              { icon } <h4 className="modal-title">{ this.props.title }</h4>
            </div>
            <div className="modal-body clearfix">
               { this.getBodyChildren() }
            </div>
            { this.getFooter() }
          </div>
        </div>
      </div>
    );
  }

  getBodyChildren() {
     return React.Children.map(this.props.children,(child) =>
        child && child.type != ModalFooter ? child : null
     );
  }

  getFooter() {
    let footerChildren = React.Children.map(this.props.children,(child) =>
      child && child.type == ModalFooter ? child : null
    );

    return footerChildren.length > 0 ? footerChildren[footerChildren.length - 1] : null;
  }

  componentDidMount() {
    $(this.element).on('hidden.bs.modal', (evt) => {
        this.props.onClose(evt);
    });

    $(this.element).on('show.bs.modal', (evt) => {
        this.props.onShow(evt);
    });
  }


  show() {

      $(this.element).modal();
  }

  close() {
      $(this.element).modal('hide');
  }

}

Modal.defaultProps = {
  title: "Modal",
  onShow: (evt) => {},
  onClose: (evt) => {}
}
