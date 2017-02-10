import React from 'react';
import Binder from 'react-binding';

export default class Bindable extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    if (this.hasModel()) {
      this.binder = this.createBinder();
    }

  }

  handleChange(evt) {
    this.props.onChange(evt);
    if (this.hasModel()) {
      this.binder.value = evt.target.value;
    }
  }

  createBinder() {

    let binder = null;
    let stateHolder = this.props.stateHolder;
    let model = this.props.model;
    let paths = model.split(".",2);
    let basePath = paths[0];

    if (paths.length > 1) {
       let secondaryPath = paths[1];
       binder = Binder.bindToState(stateHolder,basePath,secondaryPath);
    }

    return binder;
  }

  hasModel() {
    return this.props.stateHolder && this.props.model;
  }

}

Bindable.defaultProps = {
  onChange: (evt) => {}
};

Bindable.propTypes = {
  stateHolder: React.PropTypes.instanceOf(React.Component),
  model: React.PropTypes.string,
  name: React.PropTypes.string
};
