import React from 'react';
import Bindable from './Bindable';
import Constants from 'react-jspm/commons/Constants';

export default class OutputLabel extends Bindable {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-control read-only">{this.getValue()}</div>
    );
  }



}
