import React from 'react';

import Bindable from 'react-jspm/forms/Bindable';
import FormGroup from 'react-jspm/forms/FormGroup';
import Field from 'react-jspm/forms/Field';
import FieldType from 'react-jspm/forms/FieldType';
import { DetailColumn } from 'react-jspm/forms/InputDetail';

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
        <FormGroup label="Date">
          <Field type={FieldType.DATE}
            stateHolder={this.props.stateHolder}
            model="form.date"
          />
        </FormGroup>
        <FormGroup label="Boolean">
          <Field type={FieldType.CHECKBOX}
            stateHolder={this.props.stateHolder}
            model="form.active"
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
          >
             <DetailColumn
                  field="effectiveDate"
                  fieldType={FieldType.DATE}
                  label="Effective Date"
             />
             <DetailColumn
                  field="drug"
                  fieldType={FieldType.LOOKUP}
                  label="Drug"
                  domainObject="drug"

              />
          </Field>
        </FormGroup>
      </div>
    );
  }

}
