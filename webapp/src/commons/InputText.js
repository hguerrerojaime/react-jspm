import React from 'react';

export default class InputText extends React.Component {

  render() {
    return (
      <input type="text" className={"form-control input-"+this.props.size} />
    );
  }

}

InputText.defaultProps = {
   size: "md"
};
