import React from 'react';
import Bindable from './Bindable';

export default class InputText extends Bindable {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <input type="text"
          className={"form-control input-"+this.props.size}
          onChange={ this.handleChange }
          value={ this.binder.value }
          onBlur={ this.props.blur }
      />
    );
  }

  componentDidMount() {
    this.configTextCase(this.binder);
  }

  handleChange(evt) {
      this.configTextCase(evt.target);
      super.handleChange(evt);
  }

  configTextCase(valueHolder) {
    if (this.props.case == "upper") {
       valueHolder.value = valueHolder.value.toUpperCase();
    } else if (this.props.case == "lower") {
       valueHolder.value = valueHolder.value.toLowerCase();
    }

  }


}

InputText.defaultProps = {
   size: "md",
   case: null,
   change: Bindable.defaultProps.change,
   blur: (evt) => {}
};
