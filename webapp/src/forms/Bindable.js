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

       if (!this.props.stateHolder.state[basePath]) {
          this.props.stateHolder.state[basePath] = {
            [secondaryPath]:this.getInitialValue()
          };
       } else if (!this.props.stateHolder.state[basePath][secondaryPath]) {
          this.props.stateHolder.state[basePath][secondaryPath] = this.getInitialValue();
       }

       binder = Binder.bindToState(stateHolder,basePath,secondaryPath);
    }

    return binder;
  }

  hasModel() {
    return this.props.stateHolder && this.props.model;
  }

  getInitialValue() {
    return undefined;
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
