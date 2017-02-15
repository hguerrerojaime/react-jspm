import React from 'react';

import Bindable from 'react-jspm/forms/Bindable';
import FormGroup from 'react-jspm/forms/FormGroup';
import Field from 'react-jspm/forms/Field';
import FieldType from 'react-jspm/forms/FieldType';

export default class InvoiceForm extends Bindable {

  render() {
    return (
      <div>
        <FormGroup label="Supervisor">
           <Field type={FieldType.LOOKUP}
             stateHolder={this.props.stateHolder}
             model="form.supervisor"
             domainObject="employee"
           />
        </FormGroup>
        <FormGroup label="Description">
          <Field type={FieldType.TEXT}
            stateHolder={this.props.stateHolder}
            model="form.description"
            case="upper"
          />
        </FormGroup>
        <FormGroup label="Color">
          <Field type={FieldType.SELECT}
            stateHolder={this.props.stateHolder}
            model="form.color"
            options={['RED','BLUE','GREEN']}
          />
        </FormGroup>
        <FormGroup label="Items">
          <Field type={FieldType.DETAIL}
            stateHolder={this.props.stateHolder}
            model="form.items"
          />
        </FormGroup>
      </div>
    );
  }

}
