import React from 'react';

import Button from 'react-jspm/commons/Button';
import InputGroup from './InputGroup';
import Bindable from './Bindable';
import InputGroupAddon from './InputGroupAddon';
import InputText from './InputText';
import Modal from 'react-jspm/commons/Modal';
import Well from 'react-jspm/commons/Well';
import DivRow from 'react-jspm/commons/DivRow';
import DivCol from 'react-jspm/commons/DivCol';

export default class InputLookup extends Bindable {

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.state = {
      search: null
    }
  }

  render() {
    return (
      <InputGroup>
         <InputText
            stateHolder={this.props.stateHolder}
            model={this.props.model}
            name={this.props.name}
            blur={ (evt) => console.log(evt) }
         />
         <InputGroupAddon type="btn">
            <Button icon="fa fa-search" brand="info" click={this.openModal} />
         </InputGroupAddon>
         <Modal ref={(modal) => this.modal = modal}>
            <InputText stateHolder={this} model="search" />
            <Well size="sm">
                No Records Found
            </Well>
         </Modal>
      </InputGroup>
    );
  }


  openModal(evt) {
     this.modal.show();
  }

}
