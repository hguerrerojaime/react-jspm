import React from 'react';
import ReactBinding from 'react-binding';

let Binder = ReactBinding.default;

export default class Bindable extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.binder = this.createBinder();
  }

  handleChange(evt) {
    this.props.onChange(evt);
    this.binder.requestChange(evt.target.value);
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
    } else {
       binder = Binder.bindToState(stateHolder,basePath);
    }


    return binder;
  }

}

Bindable.defaultProps = {
  onChange: (evt) => {}
};

Bindable.propTypes = {
  stateHolder: React.PropTypes.instanceOf(React.Component).isRequired,
  model: React.PropTypes.string.isRequired,
  name: React.PropTypes.string
};
