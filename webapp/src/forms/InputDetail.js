import React from 'react';
import Bindable from './Bindable';
import BtnGroup from 'react-jspm/commons/BtnGroup';
import Button from 'react-jspm/commons/Button';
import Well from 'react-jspm/commons/Well';
import Modal from 'react-jspm/commons/Modal';

import FormGroup from './FormGroup';
import Field from './Field';
import FieldType from './FieldType';

class CreateItem extends Bindable {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        description: "",
        lookup: null
      }
    };
  }

  render() {
    return (
      <div>
        <FormGroup label="Description">
          <Field type={FieldType.TEXT}
            stateHolder={this}
            model="form.description"
            case="upper"
          />
        </FormGroup>
        <FormGroup label="Lookup">
          <Field type={FieldType.LOOKUP}
            stateHolder={this}
            model="form.lookup"
            domainObject="employee"
          />
        </FormGroup>
      </div>
    );
  }

}

export default class InputDetail extends Bindable {

  render() {
    return (
      <div>
        <BtnGroup>
          <Button
              brand="success"
              label="Add"
              icon="fa fa-plus"
              size="sm"
              onClick={this.openNewItemModal.bind(this)}
          />
          <Button brand="danger" label="Remove" icon="fa fa-close" size="sm" />
        </BtnGroup>
        <hr />
        <Well size="sm">
          Add Elements Here
        </Well>
        <Modal
          ref={(modal) => this.modal = modal}
          title="Add Item"
           icon="fam fam-add">
           <CreateItem />
        </Modal>
      </div>
    );
  }

  openNewItemModal() {
      this.modal.show();
  }

}
