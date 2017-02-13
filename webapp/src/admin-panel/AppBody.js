import React from 'react';

import Panel from 'react-jspm/commons/Panel';
import InputLookup from 'react-jspm/forms/InputLookup';
import DivCol from 'react-jspm/commons/DivCol';
import Form from 'react-jspm/forms/Form';
import FormGroup from 'react-jspm/forms/FormGroup';
import InputText from 'react-jspm/forms/InputText';
import InputSelect from 'react-jspm/forms/InputSelect';
import Well from 'react-jspm/commons/Well';
import RecordActionBar from 'react-jspm/forms/RecordActionBar';
import Button from 'react-jspm/commons/Button';
import alert from 'react-jspm/core/alert';
import Field from 'react-jspm/forms/Field';
import FieldType from 'react-jspm/core/FieldType';

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
         textKey: "HI",
         selectVal: null,
       }
    };

    this.submit = this.submit.bind(this);

  }

  render() {

    return (
      <div>
        <Panel title="Dashboard" brand="primary">
          <Form onSubmit={this.submit}>
            <Well size="sm">
              <RecordActionBar mode="new" />
            </Well>
            <fieldset>
            <legend>Form Data</legend>

              <FormGroup label="Supervisor">
                 <Field type={FieldType.LOOKUP}
                   stateHolder={this}
                   model="data.supervisor"
                   domainObject="employee"
                 />
              </FormGroup>
              <FormGroup label="Sample Text">
                <Field type={FieldType.TEXT}
                  stateHolder={this}
                  model="data.textKey"
                  case="upper"
                />
              </FormGroup>
              <FormGroup label="Sample Select">
                <Field type={FieldType.SELECT}
                  stateHolder={this}
                  model="data.selectVal"
                  options={['RED','BLUE','GREEN']}
                />
              </FormGroup>
              <hr />
              <Well size="sm">
                  <RecordActionBar mode="new" />
              </Well>
              </fieldset>
          </Form>
        </Panel>
      </div>
    );
  }

  submit(evt) {
     alert.confirm("Are you sure?",()=> {
         console.log(this.state);
     });
  }

}
