import React from 'react';
import Bindable from './Bindable';

export default class InputText extends Bindable {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <input type="text"
          className={"form-control input-"+this.props.size+" "+this.props.className}
          onChange={ this.handleChange }
          value={ this.binder.value }
          onBlur={ this.props.onBlur }
          placeholder={ this.props.placeholder }
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

InputText.defaultProps = Object.merge(Bindable.defaultProps,{
   size: "md",
   case: null,
   placeholder:null,
   onBlur: (evt) => {}
});

InputText.propTypes = Object.merge(Bindable.propTypes, {
   size: React.PropTypes.string.isRequired,
   onBlur: React.PropTypes.func.isRequired
});
