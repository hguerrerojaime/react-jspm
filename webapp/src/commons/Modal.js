import React from 'react';

import $ from 'jquery';

export default class Modal extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div className="modal fade" tabIndex="-1" role="dialog" ref={(element) => this.element = element }>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{ this.props.title }</h4>
            </div>
            <div className="modal-body clearfix">
                { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }


  show() {
      $(this.element).modal();
  }

  close() {
      $(this.element).modal('hide');
  }

}

Modal.defaultProps = {
  title: "Modal"
}
