import MessageModal from 'react-jspm/commons/MessageModal';
import ConfirmModal from 'react-jspm/commons/ConfirmModal';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-jspm/commons/Button';

let message = (message) => {

   renderModal(<MessageModal onClose={removeModal}>{message}</MessageModal>);

};

let confirm = (message,callback) => {
    renderModal(<ConfirmModal onConfirm={callback} onClose={removeModal}>{message}</ConfirmModal>);
};


let renderModal = (modal) => {


  ReactDOM.render(
    modal,
    document.getElementById("alert-wrapper")
  );

};

let removeModal = () => {
  ReactDOM.render(
    <div />,
    document.getElementById("alert-wrapper")
  );
}

let alert = {
  message: message,
  confirm: confirm
};

export default alert;
