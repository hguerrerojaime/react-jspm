import React from 'react';
import ReactBinding from 'react-binding';

let Binder = ReactBinding.default;

export default class Bindable extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    if (typeof this.props.stateHolder === "undefined") {
      return;
    }

    this.binder = this.createBinder();
  }

  handleChange(evt) {
    this.props.change(evt,evt.target.value);
    this.binder.requestChange(evt.target.value);
  }

  createBinder() {

    let binder = null;
    let stateHolder = this.props.stateHolder;
    let model = this.props.model;
    let name = this.props.name;

    let paths = model.split(".",2);
    let basePath = paths[0];

    if (!name) {

      if (paths.length > 1) {
         let secondaryPath = paths[1];
         binder = Binder.bindToState(stateHolder,basePath,secondaryPath);
      } else {
         binder = Binder.bindTo(stateHolder,basePath);
      }

    } else {
      binder = Binder.bindToState(stateHolder,model,name);
    }

    return binder;
  }

}

Bindable.defaultProps = {
  change: (evt,value) => {}
}
