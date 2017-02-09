import React from 'react';

import $ from 'jquery';
import Button from 'react-jspm/commons/Button';

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

    this.children = this.props.children instanceof Array ? this.props.children : [this.props.children];
    this.bodyChildren = this.children.filter((child) =>  child && child.type != ModalFooter);
    this.footerChildren = this.children.filter((child) => child && child.type == ModalFooter);


    this.footerChildren

    this.footerChild = this.footerChildren.length > 0 ? this.footerChildren[this.footerChildren.length - 1] : null;

  }

  render() {
    return (
      <div className="modal" tabIndex="-1" role="dialog" ref={(element) => this.element = element }>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{ this.props.title }</h4>
            </div>
            <div className="modal-body clearfix">
               { this.bodyChildren }
            </div>
            { this.footerChild }
          </div>
        </div>
      </div>
    );
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
