import React from 'react';

import InvoiceForm from './InvoiceForm';

import Panel from 'react-jspm/commons/Panel';
import DivCol from 'react-jspm/commons/DivCol';
import Form from 'react-jspm/forms/Form';
import FormGroup from 'react-jspm/forms/FormGroup';
import Well from 'react-jspm/commons/Well';
import RecordActionBar from 'react-jspm/forms/RecordActionBar';
import Button from 'react-jspm/commons/Button';
import alert from 'react-jspm/core/alert';
import Field from 'react-jspm/forms/Field';
import FieldType from 'react-jspm/forms/FieldType';

export default class NewInvoice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       form: {
         supervisor: null,
         description: "HI",
         color: null,
         items: [],
         active: false,
         date: undefined
       }
    };

    this.submit = this.submit.bind(this);
  }

  render() {
    return (
      <Panel title="Dashboard" brand="primary">
        <Form onSubmit={this.submit}>
          <Well size="sm">
            <RecordActionBar mode="new" />
          </Well>
          <fieldset>
          <legend>Form Data</legend>
          <InvoiceForm stateHolder={this} />
          <hr />
          <Well size="sm">
            <RecordActionBar mode="new" />
          </Well>
          </fieldset>
        </Form>
      </Panel>
    );
  }

  submit(evt) {
     alert.confirm("Are you sure?",()=> {
         console.log(this.state);
     });
  }

}
