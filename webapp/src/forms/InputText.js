import React from 'react';
import Bindable from './Bindable';

export default class InputText extends Bindable {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <input type="text"
          ref={(nativeInput) => this.nativeInput = nativeInput}
          className={"form-control input-"+this.props.size+" "+this.props.className}
          onChange={ this.handleChange }
          value={ this.binder.value }
          onBlur={ this.props.onBlur }
          placeholder={ this.props.placeholder }
          onKeyPress={ this.props.onKeyPress }
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

    let value = valueHolder.value;

    if (value) {
      if (this.props.case == "upper") {
         valueHolder.value = value.toUpperCase();
      } else if (this.props.case == "lower") {
         valueHolder.value = value.toLowerCase();
      }
    }
  }

  focus() {
    $(this.nativeInput).focus();
  }

  select() {
    $(this.nativeInput).select();
  }


}

InputText.defaultProps = Object.merge(Bindable.defaultProps,{
   size: "md",
   case: null,
   placeholder:null,
   onBlur: (evt) => {},
   onKeyPress: (evt) => {}
});

InputText.propTypes = Object.merge(Bindable.propTypes, {
   size: React.PropTypes.string.isRequired,
   case: React.PropTypes.string,
   onBlur: React.PropTypes.func.isRequired,
   onKeyPress: React.PropTypes.func.isRequired
});
