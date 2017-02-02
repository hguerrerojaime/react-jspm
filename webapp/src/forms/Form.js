import React from 'react';

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className={ "form form-"+this.props.orientation+" "+this.props.className }
          onSubmit={this.handleSubmit}
      >
          { this.props.children }
      </form>
    );
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.submit(evt);
  }

}

Form.defaultProps = {
  orientation: "horizontal",
  submit:(evt)  => {},
  clasName:null
};
