import React from 'react';


import Panel from 'react-jspm/commons/Panel';
import InputLookup from 'react-jspm/forms/InputLookup';
import DivCol from 'react-jspm/commons/DivCol';
import Form from 'react-jspm/forms/Form';
import FormGroup from 'react-jspm/forms/FormGroup';
import SubmitButton from 'react-jspm/forms/SubmitButton';
import ExampleService from 'react-jspm/services/ExampleService';
import InputText from 'react-jspm/forms/InputText';

export default class AppBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       data: {
         supervisor: {
            id: "1234",
            key: "U57605",
            value: "PANCHO PISTOLAS"
         },
         textKey: "HI"
       }
    };

    this.submit = this.submit.bind(this);

  }

  render() {

    return (
      <div>
        <Panel title="Dashboard" brand="primary">
          <Form onSubmit={this.submit}>
            <FormGroup label="Supervisor">
              <InputLookup
                  stateHolder={this}
                  model="data.supervisor"
                  lookupService="exampleService"
              />
            </FormGroup>
            <FormGroup label={this.state.data.textKey}>
              <InputText
                  stateHolder={this}
                  model="data.textKey"
              />
            </FormGroup>
            <SubmitButton brand="primary" label="Save" icon="fa fa-save" />
          </Form>
        </Panel>
      </div>
    );
  }

  submit(evt) {
     console.log(this.state);
     //this.setState({ data: {"textKey":"changed" }});
  }

}
