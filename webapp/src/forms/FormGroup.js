import React from 'react';
import DivCol from 'react-jspm/commons/DivCol';

export default class FormGroup extends React.Component {

  render() {
    return (
      <div className="form-group">
          <label className={"control-label col-"+this.props.size+"-"+this.props.labelWidth}>
            {this.props.label}
          </label>
          <DivCol size={this.props.size} width={12 - this.props.labelWidth}>
            {this.props.children}
          </DivCol>
      </div>

    );
  }

}

FormGroup.defaultProps = {
  size: "md",
  labelWidth: 2
};
