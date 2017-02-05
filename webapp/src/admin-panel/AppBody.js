import React from 'react';


import Panel from 'react-jspm/commons/Panel';
import InputLookup from 'react-jspm/forms/InputLookup';
import DivCol from 'react-jspm/commons/DivCol';
import Form from 'react-jspm/forms/Form';
import FormGroup from 'react-jspm/forms/FormGroup';
import ExampleService from 'react-jspm/services/ExampleService';

export default class AppBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       record: {
          id: "1234",
          key: "U57605",
          value: "PANCHO PISTOLAS"
       }
    };

    this.submit = this.submit.bind(this);

  }

  render() {

    return (
      <div>
        <Panel title="Dashboard" brand="primary">
          <Form submit={this.submit}>
            <FormGroup label="Supervisor">
              <InputLookup
                  stateHolder={this}
                  model="record"
                  lookupService="exampleService"
              />
            </FormGroup>
          </Form>
        </Panel>
      </div>
    );
  }

  submit(evt) {
     console.log(this.state);
  }

}
